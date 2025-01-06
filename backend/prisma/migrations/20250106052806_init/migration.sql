-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "sector" TEXT,
    "industry" TEXT,
    "marketCap" DOUBLE PRECISION,
    "peRatio" DOUBLE PRECISION,
    "priceToBook" DOUBLE PRECISION,
    "dividendYield" DOUBLE PRECISION,
    "totalAssets" DOUBLE PRECISION,
    "totalLiabilities" DOUBLE PRECISION,
    "totalEquity" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_symbol_key" ON "Company"("symbol");

-- CreateIndex
CREATE INDEX "Company_symbol_idx" ON "Company"("symbol");
