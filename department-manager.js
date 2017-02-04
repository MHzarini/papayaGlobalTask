"use strict"
class DepartmentManager {
    constructor(server) {
        var fs = require("fs");
        var content = fs.readFileSync("data.json");
        this.departments = JSON.parse(content);
        // Register department handlers
        server.use('GET', /^\/api\/departments$/, (req, res, params) => this.handleList(req, res, params));
    }

    // Get a list of all deprtmpents
    handleList(req, res, params) {
        res.write(JSON.stringify(this.departments));
        res.end();
    }

    // Update a department
    handleAddEmployee(req, res, params) {
        var department = this._getDepartment(params[0], res);
        if (!department) {
            return;
        }
        this.departments = this.departments.map(dept => {
            return dept.id != department.id ? dept : { id: dept.id, name: unescape(params[1]) };
        });
        res.write(JSON.stringify(this.departments.find(dept => dept.id === department.id)));
        res.end();
    }

    // Find a department by its ID string
    _getDepartment(deparmentIdStr, res) {
        var departmentId = parseInt(deparmentIdStr);
        var department = this.departments.find(dept => dept.id === departmentId);
        if (!department) {
            res.writeHead(404, 'Not found');
            res.end()
            return null;
        }
        return department;
    }

}

module.exports = DepartmentManager;
