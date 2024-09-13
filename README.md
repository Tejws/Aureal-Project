<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

    
</head>
<body>
    <div class="container">
      <h1>Animal Directory CRUD Application</h1>
       <p>This is a basic CRUD (Create, Read, Update, Delete) application for managing a directory of animals using Node.js and Express with a simple frontend user interface.</p>

<h2>Features</h2>
        <ul>
            <li><strong>GET</strong>: Retrieve a list of all animals.</li>
            <li><strong>POST</strong>: Add a new animal to the list.</li>
            <li><strong>PUT</strong>: Update an existing animal’s information.</li>
            <li><strong>DELETE</strong>: Remove an animal from the list.</li>
        </ul>

  <h2>Prerequisites</h2>
        <ul>
            <li>Make sure you have Node.js installed: <a href="https://nodejs.org/en/download/" target="_blank">Download Node.js</a></li>
        </ul>

  <h2>Installation Steps</h2>
        <p>Follow these steps to install and run the application locally:</p>
        <ol>
            <li><strong>Clone the repository:</strong>
                <pre><code>git clone https://github.com/Tejws/Aureal-Project.git</code></pre>
            </li>
            <li><strong>Navigate to the project folder:</strong>
                <pre><code>cd animal-directory</code></pre>
            </li>
            <li><strong>Install dependencies:</strong>
                <pre><code>npm install</code></pre>
            </li>
        </ol>
<h2 id="screenshots">Screenshots</h2>
    <p>Include screenshots of your application here.</p>
    
   ![Aureal-1](https://github.com/user-attachments/assets/9848cd75-8909-4a99-a66f-4c97a9466f8e)
   ![Aureal-2](https://github.com/user-attachments/assets/7fadfca1-ed13-41da-8cc4-b4a65c33334b)

   ![Aureal-3](https://github.com/user-attachments/assets/319ba775-5f0f-480a-af6d-701f269dd1ec)
 
   ![Aureal-4](https://github.com/user-attachments/assets/bd7e3de6-9a6f-4963-a06f-e168399c18a0)
   
   <h2>Running the Application</h2>
        <p>To start the application, use the following command:</p>
        <pre><code>npm run dev</code></pre>
        <p>This command will start the server and automatically reload it if there are any changes to the files.</p>

   <h2>Accessing the Application</h2>
        <p>Once the server is running, open your web browser and go to:</p>
        <pre><code>http://localhost:3000</code></pre>
        <p>The main interface will allow you to perform CRUD operations on the animal directory.</p>

  <h2>How to Use</h2>
        <h3>View All Animals</h3>
        <p>The list of all animals will be displayed on the page when you first load the application.</p>

   <h3>Add a New Animal</h3>
        <p>To add an animal, enter the animal's name and species in the form provided, then click "Add Animal".</p>

   <h3>Update an Animal</h3>
        <p>To update an animal, enter the animal’s ID, new name, and species, then click "Update Animal".</p>

  <h3>Delete an Animal</h3>
        <p>To delete an animal, enter the animal’s ID and click "Delete Animal".</p>
        <h2>Directory Structure</h2>
        <p>The main files in the project are organized as follows:</p>
        <pre><code>
animal-directory/
├── public/
│   ├── index.html         # Frontend UI
│   ├── style.css          # Styles for the UI
│   └── app.js             # Frontend JavaScript (fetch calls)
├── server.js              # Backend Node.js server
├── package.json           # Dependencies and metadata
└── .gitignore             # Ignored files (like node_modules)
        </code></pre>

  <h2>Contact</h2>
        <p>If you have any issues or questions, feel free to open an issue on the GitHub repository or contact me at <a href="mailto:youremail@example.com">youremail@example.com</a>.</p>
    </div>
</body>
</html>
