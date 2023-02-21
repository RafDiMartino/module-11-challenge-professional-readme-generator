// This function will generate badges based on license selection.
function licenseBadge(value) {

    if (value === "MIT license") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Apache License 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "GNU General Public License v3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/license/gpl-3-0/)";
    } else if (value === "Mozilla Public License 2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (value === "Common Development and Distribution License 1.0 (CDDL)") {
        return "[![License: MIT](https://img.shields.io/badge/License-CDDL-green.svg)](https://opensource.org/license/cddl-1-0/)";
    } else if (value === "The Unlicense") {
        return "[![License](https://img.shields.io/badge/License-Unlicense-green.svg)](https://opensource.org/license/unlicense)";
    } else {
        return;
    }

}
  
module.exports = licenseBadge;