const mongoose = require('mongoose');

// Connect to MongoDB and use the 'Fairfield' database
mongoose.connect('mongodb://localhost:27017/Fairfield', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Schema for hotel staff
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
});

// Create a Model for staff
const Staff = mongoose.model('Staff', staffSchema);

// Function to insert 30 staff records
async function insertStaff() {
  const staffData = [
    { name: 'Jonny Acevedo', role: 'Manager' },
    { name: 'r0han', role: 'Front Desk Clerk' },
    { name: 'James Alon', role: 'Chef' },
    { name: 'Andrea Claire', role: 'Housekeeper' },
    { name: 'James Wilson', role: 'Waiter' },
    { name: 'Elizabeth Taylor', role: 'Bartender' },
    { name: 'David Miller', role: 'Concierge' },
    { name: 'Jessica Anderson', role: 'Reservationist' },
    { name: 'Daniel Thomas', role: 'Maintenance Worker' },
    { name: 'Laura Moore', role: 'Room Attendant' },
    { name: 'Robert Martin', role: 'Security Guard' },
    { name: 'Sophia Garcia', role: 'Event Coordinator' },
    { name: 'Benjamin Martinez', role: 'Sous Chef' },
    { name: 'Emma Robinson', role: 'Laundry Attendant' },
    { name: 'Alexander Clark', role: 'Host/Hostess' },
    { name: 'Olivia Walker', role: 'Spa Therapist' },
    { name: 'Matthew Rodriguez', role: 'Valet Parking Attendant' },
    { name: 'Mia Hall', role: 'Assistant Manager' },
    { name: 'Christopher Allen', role: 'Bellhop' },
    { name: 'Charlotte Young', role: 'Pastry Chef' },
    { name: 'Joseph King', role: 'Dishwasher' },
    { name: 'Amelia Wright', role: 'HR Specialist' },
    { name: 'Henry Lopez', role: 'Night Auditor' },
    { name: 'Isabella Hill', role: 'Pool Attendant' },
    { name: 'Lucas Scott', role: 'Room Service Staff' },
    { name: 'Harper Green', role: 'Receptionist' },
    { name: 'Ethan Adams', role: 'Doorman' },
    { name: 'Ava Baker', role: 'Gardener' },
    { name: 'Mason Gonzalez', role: 'Kitchen Porter' },
    { name: 'Lily Perez', role: 'Marketing Specialist' },
    { name: 'Michael Foster', role: 'Receptionist' },
    { name: 'Sophia Turner', role: 'Concierge' },
    { name: 'Oliver Adams', role: 'Chef' },
    { name: 'Amelia Carter', role: 'Housekeeper' },
    { name: 'Ethan Brooks', role: 'Waiter' },
    { name: 'Isabella Clark', role: 'Bartender' },
    { name: 'Liam Mitchell', role: 'Room Service Attendant' },
    { name: 'Chloe Walker', role: 'Event Coordinator' },
    { name: 'Lucas Rivera', role: 'Valet' },
    { name: 'Mia Davis', role: 'Maintenance Worker' },
    { name: 'Jack Wilson', role: 'Night Auditor' },
    { name: 'Ella Martinez', role: 'Chef Assistant' },
    { name: 'Zoe White', role: 'Spa Therapist' },
    { name: 'Aiden Lewis', role: 'Security Guard' },
    { name: 'Harper Walker', role: 'Front Desk Clerk' },
    { name: 'Logan Carter', role: 'Room Attendant' },
    { name: 'Grace Hall', role: 'Doorman' },
    { name: 'Jackson Lee', role: 'Marketing Specialist' },
    { name: 'Lily Moore', role: 'Laundry Attendant' },
    { name: 'Benjamin Green', role: 'Barista' },
    { name: 'Scarlett Harris', role: 'Dishwasher' },
    { name: 'James Robinson', role: 'Host' },
    { name: 'Mason Brown', role: 'Security Officer' },
    { name: 'Charlotte Young', role: 'Bellhop' },
    { name: 'Amelia Allen', role: 'Restaurant Supervisor' },
    { name: 'Noah Scott', role: 'Pool Attendant' },
    { name: 'Madison King', role: 'Housekeeping Supervisor' },
    { name: 'Oliver Gray', role: 'Garden Attendant' },
    { name: 'Ava Turner', role: 'Chef de Partie' }
  ];

  try {
    const result = await Staff.insertMany(staffData);
    console.log('Staff data inserted successfully:', result);
  } catch (error) {
    console.error('Error inserting staff data:', error.message);
  }
}

// Call the insertStaff function
insertStaff();

// // // Function to find all staff (Read)
// async function findAllStaff() {
//   try {
//     const staffMembers = await Staff.find();
//     console.log('All staff:', staffMembers);
//   } catch (error) {
//     console.error('Error fetching all staff:', error.message);
//   }
// }

// // Call the findAllStaff function (after calling insertStaff to insert data first)
// setTimeout(findAllStaff, 2000); // Add a small delay to let the insertion complete before reading

// // Function to update staff member by name (Update)
// async function updateStaffRole(name, newRole) {
//   try {
//     const result = await Staff.updateOne({ name }, { $set: { role: newRole } });
//     console.log(`Staff member ${name} updated to ${newRole}:`, result);
//   } catch (error) {
//     console.error('Error updating staff:', error.message);
//   }
// }

// // Call the updateStaffRole function (to update a staff member's role)
// setTimeout(() => updateStaffRole('Michael Foster', 'Senior Receptionist'), 4000);

// // Function to delete staff member by name (Delete)
// async function deleteStaffByName(name) {
//   try {
//     const result = await Staff.deleteOne({ name });
//     console.log(`Staff member ${name} deleted:`, result);
//   } catch (error) {
//     console.error('Error deleting staff member:', error.message);
//   }
// }

// // Call the deleteStaffByName function (to delete a staff member by name)
// setTimeout(() => deleteStaffByName('Benjamin Green'), 6000);

// // Call the findAllStaff function again (to check the updated staff list after deletion)
// setTimeout(findAllStaff, 8000);


// Close the connection after everything
setTimeout(() => mongoose.connection.close(), 10000);





