# Сборка jar внутри образа: target/ в репозитории нет. openjdk:17 удалён с Docker Hub — eclipse-temurin
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /src
COPY spring-angular/ .
RUN mvn -q -DskipTests package

FROM eclipse-temurin:17-jre
EXPOSE 8080
COPY --from=build /src/target/spring-angular-0.0.1-SNAPSHOT.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
