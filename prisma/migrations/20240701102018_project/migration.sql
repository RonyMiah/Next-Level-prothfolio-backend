-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "githubClientLink" TEXT NOT NULL,
    "githubServerLink" TEXT NOT NULL,
    "liveSite" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
