ALTER TABLE "auth_one_users" ALTER COLUMN "password" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "auth_one_users" ADD COLUMN "username" varchar(100);--> statement-breakpoint
ALTER TABLE "menu_item" ADD COLUMN "category" varchar(20);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "contact_verified" boolean;--> statement-breakpoint
ALTER TABLE "auth_one_users" DROP COLUMN IF EXISTS "email";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "phone_verified";