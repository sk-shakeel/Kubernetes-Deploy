FROM openjdk:11

COPY ./target/*.jar service-registry-service.jar

EXPOSE 8761

CMD ["java", "-jar", "service-registry-service.jar"]