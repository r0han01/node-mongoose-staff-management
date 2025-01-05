### MERN Stack MongoDB Project
- This project is a basic MERN stack application that utilizes MongoDB as its database. The backend is built using Node.js and Mongoose, providing a clean and efficient way to interact with MongoDB.
###
![Screenshot from 2025-01-04 23-38-03](https://github.com/user-attachments/assets/bbf8ad19-343c-4d26-b843-365a680bf4ed)

#### Prerequisites
- Before getting started, ensure you have the following installed on your local machine:

- `Node.js` (Version 12 or higher)
- `npm` or `yarn`
- `MongoDB` (running locally or a remote MongoDB instance)
If MongoDB is not installed, you can follow the MongoDB Installation Guide.

#### Steps to Set Up the Project
Clone this repository to your local machine:

```bash
git clone https://github.com/r0han01/node-mongoose-staff-management.git
```
#### Navigate to the project directory:

```bash
cd node-mongoose-staff-management
```
#### Install the required dependencies:

```bash
npm install
```
- Create a .env file in the root directory and add your MongoDB URI (connection string) and any other environment variables.

Example .env file: 

- Use 

```
python3 -m venv myenv
source myenv/bin/activate
```

```bash
MONGO_URI=mongodb://localhost:27017/`your-database-name`
```
- Run the application:

```bash
npm start
```
- The app should now be running and connected to MongoDB.

#### Mongoose & MongoDB Commands
1. Connecting to MongoDB using Mongoose:
- To connect to your MongoDB instance, use the following command:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
```
2. Defining a Mongoose Schema:
- Schemas define the structure of the documents within a collection.

```javascript
const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
});

const Staff = mongoose.model('Staff', staffSchema);
```
3. Inserting Data into MongoDB:
- You can insert a document (or multiple documents) into MongoDB using insertMany or save methods.

```javascript
const newStaff = new Staff({
  name: 'John Doe',
  role: 'Manager',
});

newStaff.save()
  .then(() => console.log('Staff member added'))
  .catch(err => console.error('Error adding staff member:', err));
  ```
- To insert multiple staff members:

```javascript
const staffData = [
  { name: 'Michael Foster', role: 'Receptionist' },
  { name: 'Sophia Turner', role: 'Concierge' }
];

Staff.insertMany(staffData)
  .then(() => console.log('Staff members inserted'))
  .catch(err => console.error('Error inserting staff:', err));
  ```
4. Reading Data from MongoDB:
- You can read data from MongoDB using methods like find(), findOne(), and findById().

- To get all staff members:

```javascript
Staff.find()
  .then(staff => console.log('Staff members:', staff))
  .catch(err => console.error('Error fetching staff:', err));
  ```
- To find a single staff member by name:

```javascript
Staff.findOne({ name: 'Michael Foster' })
  .then(staff => console.log('Staff member:', staff))
  .catch(err => console.error('Error finding staff member:', err));
  ```
5. Updating Data in MongoDB:
- You can update documents in MongoDB using updateOne, updateMany, or findOneAndUpdate.

- To update a staff member's role:

```javascript
Staff.updateOne({ name: 'Michael Foster' }, { $set: { role: 'Senior Receptionist' } })
  .then(() => console.log('Staff role updated'))
  .catch(err => console.error('Error updating staff role:', err));
  ```
6. Deleting Data from MongoDB:
- You can delete documents using deleteOne, deleteMany, or findOneAndDelete.

- To delete a staff member by name:

```javascript
Staff.deleteOne({ name: 'Michael Foster' })
  .then(() => console.log('Staff member deleted'))
  .catch(err => console.error('Error deleting staff member:', err));
  ```
7. Handling Errors:
- Mongoose operations are asynchronous, so always handle errors properly using .catch() or try/catch blocks in async functions.

8. Closing the Connection:
- After performing database operations, you should close the connection:

```javascript
mongoose.connection.close()
  .then(() => console.log('Connection closed'))
  .catch(err => console.error('Error closing connection:', err));
  ```
#### Useful npm Scripts
- Start the server: `npm start`

#### Runs the application on the specified port (default: 3000).
- Install dependencies: `npm install`

#### Installs all project dependencies listed in package.json.
- Run tests (if applicable): `npm test
`
#### Contributing
- Feel free to fork the repository, make changes, and submit pull requests. Please ensure you follow the coding style and write tests for any new features.


### Notes:
- `MongoDB URL`: Make sure you replace mongodb://localhost:27017/your-database-name with your actual MongoDB connection URL.
- `Environment Variables`: The .env file helps to keep sensitive information (like database credentials) secure. Always exclude it from version control by adding it to .gitignore.
