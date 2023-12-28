export async function fetchUsers(perPage) {
  const resp = await fetch(`https://randomuser.me/api/?results=${perPage}`);
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("fetch users error");
}
