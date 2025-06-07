
FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
COPY spring-angular/target/spring-angular-0.0.1-SNAPSHOT.jar /spring-angular-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","spring-angular-0.0.1-SNAPSHOT.jar"]