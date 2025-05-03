# Angular Workspace for Data Management

This project demonstrates a simple Angular workspace with two separate applications (`data-viewer-app` and `data-manager-app`) that interact with a shared "database" (simulated in-memory) through a common library (`shared-data-service`). This setup illustrates how to structure a multi-app Angular project and share data and logic between applications.

## Project Structure
```
data-management-workspace/
├── projects/
│   ├── data-manager-app/        # Application for adding and deleting data
│   │   ├── ...
│   ├── data-viewer-app/         # Application for viewing data only
│   │   ├── ...
│   └── shared-data-service/    # Shared library containing data model and service
│       ├── src/
│       │   ├── lib/
│       │   │   ├── models/
│       │   │   │   └── data-item.model.ts
│       │   │   └── services/
│       │   │       └── data.service.ts
│       │   └── public-api.ts
│       └── ...
├── angular.json               # Angular CLI configuration file
├── package.json
├── README.md                  # This file
└── ...
```

## Applications

* **`data-viewer-app`**: A basic user interface that displays a list of data items fetched from the shared service. Users of this application can only view the data.
* **`data-manager-app`**: An administrative interface that allows users to view, add, and delete data items using the shared service.

## Shared Library

* **`shared-data-service`**: This library contains:
    * **`DataItem` Model**: Defines the structure of the data items.
    * **`DataService`**: A service that manages the data (in-memory). It provides methods to get the data, add new items, and delete existing items. It uses a `BehaviorSubject` to emit changes to the data, allowing both applications to stay updated.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sachinksamad1/data-management-workspace.git
    cd data-management-workspace
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the shared library:**
    ```bash
    ng build shared-data-service
    ```

4.  **Serve the applications:**

    Open two separate terminal windows in the root of the workspace:

    * **Data Viewer App:**
        ```bash
        ng serve data-viewer-app -o
        ```

    * **Data Manager App:**
        ```bash
        ng serve data-manager-app -o
        ```

    The `data-viewer-app` will be accessible at `http://localhost:4200/` (or a similar port), and the `data-manager-app` will be at `http://localhost:4201/` (or another port).

## Functionality

**Data Viewer App:**

* Displays a list of data items (ID, Name, Description).
* The list updates automatically when data is added or deleted through the Data Manager App.

**Data Manager App:**

* Displays a list of data items with a "Delete" button for each item.
* Provides a form to add new data items (Name and Description).
* Changes made here are reflected in the Data Viewer App in real-time.

## Key Concepts Demonstrated

* **Angular Workspaces:** Organizing multiple related projects within a single repository.
* **Shared Libraries:** Creating reusable modules containing services, components, and models that can be used by multiple applications within the workspace.
* **Service-Based Data Sharing:** Using a shared service (`DataService`) to manage and provide data to different applications.
* **`BehaviorSubject` for State Management:** Employing `BehaviorSubject` to hold and emit the latest data, enabling reactive updates across applications.
* **Separation of Concerns:** Distinguishing between user roles and their respective functionalities in separate applications.

## Further Development

This is a basic example and can be extended in many ways, such as:

* Implementing a real backend database instead of in-memory data.
* Adding user authentication and authorization to properly secure the data management features.
* Implementing more complex data manipulation features (e.g., editing).
* Using a more robust state management solution (e.g., NgRx, NgXS) for larger applications.
* Adding unit and integration tests.
