# DatingApp API

A sample project built with **.NET 9 Web API**, **Entity Framework Core**, and **SQLite**.  
It includes basic endpoints to test users (`/api/members`) and a demo endpoint (`/weatherforecast`).

---

## 🚀 Requirements

- [.NET 9 SDK](https://dotnet.microsoft.com/download)
- [SQLite](https://www.sqlite.org/download.html) (optional, the file will be created automatically by EF Core)
- Git (to clone the repository)

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourrepo.git
   cd Webservices-Project/API
   ```

2. Restore dependencies:

   ```bash
   dotnet restore
   ```

3. Apply the migrations to create the database:

   ```bash
   dotnet tool install --global dotnet-ef
   dotnet ef database update
   ```

   This will generate a `dating.db` file in the project directory.

---

## ▶️ Run the project

From the `API` folder, run:

```bash
dotnet run
```

By default, the API will be available at:

* [http://localhost:5001](http://localhost:5001)

---

## 🌐 Available Endpoints

### Weather Forecast (demo)

```bash
GET http://localhost:5001/weatherforecast
```

### Members

* **Get all users**

  ```bash
  GET http://localhost:5001/api/members
  ```
* **Get a user by ID**

  ```bash
  GET http://localhost:5001/api/members/{id}
  ```

---

## 🛠️ Database

The database is handled with **SQLite** (`dating.db`).
You can open it with:

```bash
sqlite3 dating.db
.tables
```

---

## ✅ GitHub Actions Test

This repo includes a workflow (`tryApi.yml`) that:

1. Restores dependencies.
2. Builds the project.
3. Applies migrations (`dotnet ef database update`).
4. Runs the API in the background.
5. Inserts a test user into SQLite.
6. Calls `/api/members` with `curl` to verify.

You can run it manually from the **Actions** tab on GitHub by selecting **Run workflow**.
