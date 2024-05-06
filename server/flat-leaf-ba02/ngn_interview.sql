BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "students" (
	"id"	INTEGER,
	"name"	TEXT,
	"mark"	INTEGER,
	"isFirst"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (1,'Karin Pendre',88,1);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (2,'Curr Celand',95,0);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (3,'Christoph Alphege',4,0);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (4,'Malissa McCarlich',22,0);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (5,'Harli Kahler',94,1);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (6,'Cassondra Tripon',23,1);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (7,'Tan Abella',49,1);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (8,'Shelley Bugg',54,1);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (9,'Alysa Wyndham',45,0);
INSERT INTO "students" ("id","name","mark","isFirst") VALUES (10,'Moe Furley',68,1);
COMMIT;
