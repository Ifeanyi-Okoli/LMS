class AdministrativeStaff {
    constructor(name, role, permissions) {
      this.name = name;
      this.role = role;
      this.permissions = permissions;
    }
  }

  const schoolManager = function () { return new AdministrativeStaff("Mathias Usman", "School Manager", "Full permissions")};
  const accountant = () => {return new AdministrativeStaff("James Daniel", "Accountant", "Restricted permissions")};
  const driver = () => {return new AdministrativeStaff("Yusuf Akin", "Driver", "Restricted permissions")};
  const securityGuard = () =>{return new AdministrativeStaff("Mohammed Adamu", "Security Guard", "Restricted permissions")};
  

  //Exporting Line
  module.exports = {AdministrativeStaff, schoolManager, accountant, driver, securityGuard};