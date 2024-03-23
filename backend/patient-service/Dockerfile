FROM openjdk:11

COPY ./target/*.jar patient-service.jar

EXPOSE 9005

CMD ["java", "-jar", "patient-service.jar"]