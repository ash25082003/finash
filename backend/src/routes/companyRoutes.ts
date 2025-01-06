import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { CompanyController } from '../controllers/companyController';

const router = Router();
const companyController = new CompanyController();

// Add type annotations to the route handlers
router.post('/', (req: Request, res: Response, next: NextFunction) => companyController.createCompany(req, res));
router.get('/', (req: Request, res: Response, next: NextFunction) => companyController.getCompanies(req, res));
router.get('/:symbol', (req: Request, res: Response, next: NextFunction) => companyController.getCompany(req, res));
router.put('/:symbol', (req: Request, res: Response, next: NextFunction) => companyController.updateCompany(req, res));

export default router;