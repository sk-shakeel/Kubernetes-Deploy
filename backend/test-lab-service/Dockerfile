FROM openjdk:11

COPY ./target/*.jar test-lab-service.jar

EXPOSE 9006

CMD ["java", "-jar", "test-lab-service.jar"]