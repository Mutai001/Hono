DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "usersAuth" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"password" varchar(100),
	"username" varchar(100),
	"role" "role" DEFAULT 'user'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comment" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"comment_text" text NOT NULL,
	"is_complaint" boolean NOT NULL,
	"is_praise" boolean NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"orders" varchar(255),
	"users" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "driver" (
	"id" serial PRIMARY KEY NOT NULL,
	"car_make" varchar NOT NULL,
	"car_model" varchar NOT NULL,
	"car_year" integer NOT NULL,
	"user_id" integer NOT NULL,
	"online" boolean NOT NULL,
	"delivering" boolean,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"users" varchar(255),
	"orders" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "order_status" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"status_catalog_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"orders" varchar(255) NOT NULL,
	"status_catalog" varchar(255) NOT NULL
);
--> statement-breakpoint
DROP TABLE "comments";--> statement-breakpoint
DROP TABLE "drivers";--> statement-breakpoint
DROP TABLE "orders_status";--> statement-breakpoint
ALTER TABLE "orders" DROP CONSTRAINT "orders_driver_id_drivers_id_fk";
--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "street_address_1" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "street_address_1" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "street_address_2" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "city_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "category" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "city" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "ingredients" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "price" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "active" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "category" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "estimated_delivery_time" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "price" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "discount" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "final_price" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "street_address" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "state" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "state" ALTER COLUMN "code" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "status_catalog" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "contact_phone" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email_verified" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "confirmation_code" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "confirmation_code" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ADD COLUMN "city" varchar(255);--> statement-breakpoint
ALTER TABLE "address" ADD COLUMN "users" varchar(255);--> statement-breakpoint
ALTER TABLE "address" ADD COLUMN "orders" varchar(255);--> statement-breakpoint
ALTER TABLE "category" ADD COLUMN "menu_item" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "city" ADD COLUMN "address" text NOT NULL;--> statement-breakpoint
ALTER TABLE "city" ADD COLUMN "state" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "city" ADD COLUMN "restaurant" varchar(255);--> statement-breakpoint
ALTER TABLE "menu_item" ADD COLUMN "restaurant" varchar(255);--> statement-breakpoint
ALTER TABLE "menu_item" ADD COLUMN "order_menu_item" varchar(255);--> statement-breakpoint
ALTER TABLE "order_menu_item" ADD COLUMN "item_price" numeric(10, 2) NOT NULL;--> statement-breakpoint
ALTER TABLE "order_menu_item" ADD COLUMN "price" numeric(10, 2) NOT NULL;--> statement-breakpoint
ALTER TABLE "order_menu_item" ADD COLUMN "comment" text;--> statement-breakpoint
ALTER TABLE "order_menu_item" ADD COLUMN "menu_item" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "order_menu_item" ADD COLUMN "orders" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "comments" text;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "order_menu_item" varchar(255);--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "order_status" varchar(255);--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "address" varchar(255);--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "driver" varchar(255);--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "restaurant" varchar(255);--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "users" varchar(255);--> statement-breakpoint
ALTER TABLE "restaurant_owner" ADD COLUMN "users" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant_owner" ADD COLUMN "restaurant" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ADD COLUMN "menu_item" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ADD COLUMN "orders" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ADD COLUMN "city" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ADD COLUMN "restaurant_owner" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "state" ADD COLUMN "city" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "phone_verified" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "city" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "users" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "drivers" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "orders" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "restaurant_owner" varchar(255);--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersAuth" ADD CONSTRAINT "usersAuth_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comment" ADD CONSTRAINT "comment_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comment" ADD CONSTRAINT "comment_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "driver" ADD CONSTRAINT "driver_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_status" ADD CONSTRAINT "order_status_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_driver_id_driver_id_fk" FOREIGN KEY ("driver_id") REFERENCES "public"."driver"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "updated_at";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "state";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "contact_verified";