"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    suites: {
        login: '../spec/*',
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNXLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxlQUFlLEVBQUUsOEJBQThCO0lBQy9DLGFBQWEsRUFBRSxJQUFJO0lBQ25CLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELE1BQU0sRUFBQztRQUNMLEtBQUssRUFBRSxXQUFXO0tBR25CO0lBRUQsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBRWpCO0NBT0YsQ0FBQyJ9