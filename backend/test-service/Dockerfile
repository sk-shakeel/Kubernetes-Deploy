FROM openjdk:11

COPY ./target/*.jar test-service.jar

EXPOSE 9007

CMD ["java", "-jar", "test-service.jar"]