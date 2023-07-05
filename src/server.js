import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import YAML from 'yaml';
import app from './app.js';

const port = process.env.PORT || 5000;

const file = fs.readFileSync('swagger/ecomm.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => console.log(`Server is up and listening on port ${port}`));
