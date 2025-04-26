import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Change } from '../../modules/change/entities/change.entity';

@Injectable()
export class ChangeLoggerMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const user = req.user?.['email'] || 'unknown';

    const changes = req.body;
    const formatedChanges = Object.values(changes).join(', ');

    res.on('finish', async () => {
      if (formatedChanges.length > 0 && res.statusCode < 400) {
        await Change.create({
          timestamp: new Date(),
          user,
          entity: this.getEntityName(req.url),
          changes: formatedChanges,
        });
      }
    });

    next();
  }

  private getEntityName(url: string): string {
    switch (true) {
      case url.includes('organization'):
        return 'Organizations';
      case url.includes('department'):
        return 'Departments';
      case url.includes('profession'):
        return 'Professions';
      case url.includes('file'):
        return 'Files';
      case url.includes('employee'):
        return 'Employees';
      case url.includes('operation'):
        return 'Operations';
      case url.includes('user'):
        return 'Users';
      default:
        return 'Unknown';
    }
  }
}
