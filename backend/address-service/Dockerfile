FROM openjdk:11

COPY ./target/*.jar address-service.jar

EXPOSE 9001

CMD ["java", "-jar", "address-service.jar"]