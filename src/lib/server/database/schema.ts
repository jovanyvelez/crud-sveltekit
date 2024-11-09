import { text, sqliteTable } from 'drizzle-orm/sqlite-core';


export const users = sqliteTable('users', {
	id: text()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text().notNull(),
	email: text().notNull().unique()
});

export type UserSelect = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;
