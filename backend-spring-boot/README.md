# backend-spring-boot

Spring Boot backend scaffold connected to MongoDB hosted at tlas.

## Run

Build and run with Maven (requires Java 17+):

```bash
mvn clean package
mvn spring-boot:run
```

Or run from the packaged jar:

```bash
java -jar target/backend-spring-boot-0.0.1-SNAPSHOT.jar
```

The application exposes basic product REST endpoints at `http://localhost:8080/api/products`.

## MongoDB connection

The app is configured to use MongoDB at `tlas` with username `root` and password `123`. If you need to change these, update `src/main/resources/application.properties`.

```properties
spring.data.mongodb.uri=mongodb://root:123@tlas:27017/tlas?authSource=admin
```

