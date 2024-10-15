import { column, Schema, Table } from "@powersync/web";

const test = new Table({
  user_id: column.text,
});

export const AppSchema = new Schema([test]);
