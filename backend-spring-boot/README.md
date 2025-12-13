# backend-spring-boot

Spring Boot backend scaffold connected to MongoDB. The project targets Java 21.

## Run

Build and run with Maven (requires Java 21+):

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

The app is configured to use MongoDB at `tlas` with username `root` and password `123`. You can override this at runtime using an environment variable or a Spring Boot argument.

```properties
spring.data.mongodb.uri=mongodb://root:123@tlas:27017/tlas?authSource=admin

Examples:

- PowerShell (temporary for current session):
	```powershell
	$env:SPRING_DATA_MONGODB_URI='mongodb+srv://root:123@cluster0.wpzy5.mongodb.net/tlas?retryWrites=true&w=majority'
	mvn -DskipTests spring-boot:run
	```

- Unix / Bash:
	```bash
	export SPRING_DATA_MONGODB_URI='mongodb+srv://root:123@cluster0.wpzy5.mongodb.net/tlas?retryWrites=true&w=majority'
	mvn -DskipTests spring-boot:run
	```

Or pass it directly as a Spring Boot argument:

```bash
mvn -DskipTests -Dspring-boot.run.arguments="--spring.data.mongodb.uri=mongodb+srv://root:123@cluster0.wpzy5.mongodb.net/tlas?retryWrites=true&w=majority" spring-boot:run
```
```

