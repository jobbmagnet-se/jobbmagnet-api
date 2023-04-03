db.createUser({
  user: 'rushdi',
  pwd: passwordPrompt(),
  roles: [{ role: 'readWrite', db: 'jobbmagnetdb' }],
});
