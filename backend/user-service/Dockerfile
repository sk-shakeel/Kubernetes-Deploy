FROM openjdk:11

COPY ./target/*.jar user-service.jar

EXPOSE 9008

CMD ["java", "-jar", "user-service.jar"]