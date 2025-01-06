import { Request, Response } from 'express';
import { CompanyService } from '../services/companyService';

const companyService = new CompanyService();

export class CompanyController {
  createCompany = async (req: Request, res: Response): Promise<void> => {
    try {
      const company = await companyService.createCompany(req.body);
      res.status(201).json(company);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create company' });
    }
  };

  getCompany = async (req: Request, res: Response): Promise<void> => {
    try {
      const { symbol } = req.params;
      const company = await companyService.getCompanyBySymbol(symbol);
      
      if (!company) {
        res.status(404).json({ error: 'Company not found' });
        return;
      }
      
      
      res.json(company);
    } catch (error) {
      res.status(400).json({ error: 'Failed to fetch company' });
    }
  };

  getCompanies = async (req: Request, res: Response): Promise<void> => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      
      const result = await companyService.getAllCompanies(page, limit);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: 'Failed to fetch companies' });
    }
  };

  updateCompany = async (req: Request, res: Response): Promise<void> => {
    try {
      const { symbol } = req.params;
      const company = await companyService.updateCompany(symbol, req.body);
      res.json(company);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update company' });
    }
  };
}