# Instruction to setup the project.

### 1. Pull the code from github

```
 git clone https://github.com/thatkunaaal/Typescript-express-starter-template.git ${project_name}
```

### 2. Install all the dependencies.

```
npm install
```

### 3. Move to src directory

```
cd src
```

### 4. Initialise sequelize in your project.

```
npx sequelize-cli init --force
```

### 5. Create a .env file and initialise the port vairable in it.

```
PORT=${PORT_NUMBER}
```

### 6. Start the server.

```
npm run dev
```
