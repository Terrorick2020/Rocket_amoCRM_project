FROM node:18-alpine AS production

WORKDIR /app

COPY . .
RUN npm i

#RUN npm run build
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]