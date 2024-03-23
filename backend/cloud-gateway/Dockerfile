FROM openjdk:11

COPY ./target/*.jar cloud-gateway-service.jar

EXPOSE 9191

CMD ["java", "-jar", "cloud-gateway-service.jar"]