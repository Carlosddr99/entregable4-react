# Establece la imagen base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de tu proyecto al directorio de trabajo del contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Compila tu proyecto React para producción
RUN npm run build

# Expone el puerto en el que se ejecuta tu aplicación
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD [ "npm", "start" ]
