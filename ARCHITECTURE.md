# Architecture Explanation

## 1. How would I scale this system to 100k users?

If the number of users grows to around 100k, I would move the project to a cloud platform like AWS or Google Cloud. Instead of running only one server, multiple servers can run at the same time and a load balancer can divide the traffic between them.

For storing journal entries, a proper database like MongoDB or PostgreSQL would be better because they can handle large amounts of data. I would also use caching so that frequently requested data can be returned faster.

---

## 2. How would I reduce LLM cost?

Calling an LLM for every request can become expensive. To reduce the cost, I would save the analysis result in the database after it is generated once.

If the same journal entry needs to be analyzed again, the system can return the saved result instead of calling the LLM again.

---

## 3. How would I cache repeated analysis?

To cache repeated analysis, I would store the analysis result along with the journal entry. When a request comes again for the same text, the system first checks if the result already exists.

If it exists, the saved result will be returned instead of running the analysis again.

---

## 4. How would I protect sensitive journal data?

Journal entries can contain personal thoughts, so data protection is important.

Some steps I would take:

* Use HTTPS so the data is encrypted.
* Only allow the correct user to access their journal entries.
* Store data safely in the database.
* Regular backups so data is not lost.
