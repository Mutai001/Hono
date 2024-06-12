CREATE TABLE IF NOT EXISTS "auth_one_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"password" varchar(100),
	"username" varchar(100),
	"role" "role" DEFAULT 'user'
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"comment_text" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "drivers" (
	"id" serial PRIMARY KEY NOT NULL,
	"car_make" varchar(255) NOT NULL,
	"car_model" varchar(255) NOT NULL,
	"car_year" integer NOT NULL,
	"user_id" integer NOT NULL,
	"online" boolean NOT NULL,
	"delivering" boolean NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders_status" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"status_id" integer NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DROP TABLE "usersAuth";--> statement-breakpoint
DROP TABLE "comment";--> statement-breakpoint
DROP TABLE "driver";--> statement-breakpoint
DROP TABLE "order_status";--> statement-breakpoint
ALTER TABLE "orders" DROP CONSTRAINT "orders_driver_id_driver_id_fk";
--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "street_address_1" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "street_address_1" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "street_address_2" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "user_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "city_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "address" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "category" ALTER COLUMN "name" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "city" ALTER COLUMN "name" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "name" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "ingredients" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "active" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "menu_item" ALTER COLUMN "category" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "estimated_delivery_time" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "discount" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "final_price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "name" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "street_address" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "restaurant" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "state" ALTER COLUMN "name" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "state" ALTER COLUMN "code" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "status_catalog" ALTER COLUMN "name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "contact_phone" SET DATA TYPE varchar(12);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email_verified" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "confirmation_code" SET DATA TYPE varchar(10);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "confirmation_code" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET DATA TYPE date;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "order_menu_item" ADD COLUMN "created_at" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "order_menu_item" ADD COLUMN "updated_at" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "restaurant" ADD COLUMN "state" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "contact_verified" boolean;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth_one_users" ADD CONSTRAINT "auth_one_users_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "drivers" ADD CONSTRAINT "drivers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders_status" ADD CONSTRAINT "orders_status_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders_status" ADD CONSTRAINT "orders_status_status_id_status_catalog_id_fk" FOREIGN KEY ("status_id") REFERENCES "public"."status_catalog"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_driver_id_drivers_id_fk" FOREIGN KEY ("driver_id") REFERENCES "public"."drivers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "address" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "address" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "address" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "category" DROP COLUMN IF EXISTS "menu_item";--> statement-breakpoint
ALTER TABLE "city" DROP COLUMN IF EXISTS "address";--> statement-breakpoint
ALTER TABLE "city" DROP COLUMN IF EXISTS "state";--> statement-breakpoint
ALTER TABLE "city" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "menu_item" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "menu_item" DROP COLUMN IF EXISTS "order_menu_item";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "item_price";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "price";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "comment";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "menu_item";--> statement-breakpoint
ALTER TABLE "order_menu_item" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "comments";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "order_menu_item";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "order_status";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "address";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "driver";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "restaurant_owner" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "restaurant_owner" DROP COLUMN IF EXISTS "restaurant";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "menu_item";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "restaurant" DROP COLUMN IF EXISTS "restaurant_owner";--> statement-breakpoint
ALTER TABLE "state" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "phone_verified";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "users";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "drivers";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "orders";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "restaurant_owner";