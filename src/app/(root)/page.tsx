import { prisma } from "@/lib/prisma";

export default async function Page() {
  const users = await prisma.user.findMany();
  return (
    <main>
      <h1 className="text-3xl">Chat Room</h1>
      <ul>
        {users.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </main>
  );
}
