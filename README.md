# SpringAngularUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

npm update
npm audit fix --force


spring-angular-ui> npm run build_dev

spring-angular> mvn clean install

spring-angular> mvn spring-boot:run

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

--------------------
ng generate component 




--------

docker-compose -f compose.yaml up -d  

docker run --name pgadmin -e "PGADMIN_DEFAULT_EMAIL=name@example.com" -e "PGADMIN_DEFAULT_PASSWORD=admin" -p 5050:80 -d dpage/pgadmin4 


docker network create --driver bridge pgnetwork
docker network ls

docker network connect pgnetwork pgadmin

docker network inspect pgnetwork

docker run --name postgresDB -p 5432:5432 -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=postgrespw -d postgres

docker network connect pgnetwork postgres

----------------
