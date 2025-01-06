// src/services/companyService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CompanyService {
  async createCompany(data: {
    symbol: string;
    name: string;
    description?: string;
    sector?: string;
    industry?: string;
    marketCap?: number;
    peRatio?: number;
    priceToBook?: number;
    dividendYield?: number;
    totalAssets?: number;
    totalLiabilities?: number;
    totalEquity?: number;
  }) {
    return prisma.company.create({
      data
    });
  }

  async getCompanyBySymbol(symbol: string) {
    return prisma.company.findUnique({
      where: { symbol }
    });
  }

  async getAllCompanies(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const [companies, total] = await Promise.all([
      prisma.company.findMany({
        skip,
        take: limit,
        orderBy: { symbol: 'asc' }
      }),
      prisma.company.count()
    ]);

    return {
      companies,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    };
  }

  async updateCompany(symbol: string, data: any) {
    return prisma.company.update({
      where: { symbol },
      data
    });
  }
}