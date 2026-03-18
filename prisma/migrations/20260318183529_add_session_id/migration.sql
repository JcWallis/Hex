-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "sessionId" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "notes" ADD COLUMN     "sessionId" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "sessionId" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "work_items" ADD COLUMN     "sessionId" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE INDEX "documents_sessionId_idx" ON "documents"("sessionId");

-- CreateIndex
CREATE INDEX "notes_sessionId_idx" ON "notes"("sessionId");

-- CreateIndex
CREATE INDEX "tasks_sessionId_idx" ON "tasks"("sessionId");

-- CreateIndex
CREATE INDEX "work_items_sessionId_idx" ON "work_items"("sessionId");
