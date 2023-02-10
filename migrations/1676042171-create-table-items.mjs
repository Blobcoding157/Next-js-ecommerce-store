export async function up(sql) {
  await sql`
 CREATE TABLE items(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title varchar(30) NOT NULL,
  type varchar(10) NOT NULL,
  description varchar(200),
  imageLink varchar(50),
  price integer NOT NULL
  );

 `;
}

export async function down(sql) {
  await sql`
  DROP TABLE items`;
}
