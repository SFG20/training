import { Link as RouterLink } from "react-router-dom"
// import * as Components from "./examples/stateless-components"
import { registerPageNavigation } from "lib/routes"
import { dashboardRoute } from "routes/dashboard/runtime-main"
import Iconify from "minimals-template/components/Iconify"
import { Link } from "@mui/material"

export const trainingRoute = dashboardRoute.register("/dashboard/training", <Training />)
registerPageNavigation("/dashboard/training", "Training", <Iconify icon="dashicons:welcome-learn-more" />)

// @mui

function Training() {
    return (
        <div>
            <h3>Front-end Javascript Learning</h3>
            <h4>Setup</h4>
            <ul>
                <li>
                    <a href="https://www.nodejs.com">Node v16+</a>
                </li>
                <li>
                    <a href="https://www.docker.com">Docker</a>
                </li>
                <li>
                    <a href="https://www.npmjs.com">NPM - Node Package Manager</a>
                </li>
            </ul>
            <h4>Our codebase</h4>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript - ES6</a>
                </li>
                <li>
                    <a href="https://reactjs.org/docs/getting-started.html">
                        React - A Javascript library for building user interfaces
                    </a>
                </li>
                <li>
                    <a href="https://v5.reactrouter.com/web/guides/quick-start">
                        React Router - A collection of navigational components that compose declaratively with your
                        application
                    </a>
                </li>
            </ul>
            <p>These tools are wrapped in helpers and libraries to </p>

            <h3>React Learning</h3>
            <ul>
                <li>
                    <Link component={RouterLink} to="/dashboard/training/videoplayer">
                        VideoPlayer - Event emitter example
                    </Link>
                </li>
                <li>
                    <a
                        href="https://codesandbox.io/s/funny-lalande-9rep3h?file=/src/App.js
"
                    >
                        StateLess components
                    </a>
                </li>
                <li>
                    Stateful components / Hooks (Custom / Async)
                    <ul>
                        <li>
                            <a href="https://codesandbox.io/s/pedantic-torvalds-z6fl7o?file=/src/App.js:326-328">
                                Basic State
                            </a>
                        </li>
                        <li>
                            <a href="https://codesandbox.io/s/elastic-kirch-hpi4hi?file=/src/App.js">
                                State and Side effects
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://codesandbox.io/s/still-night-dlthd8?file=/src/App.js
"
                            >
                                Portable and Reusable State through hooks
                            </a>
                        </li>
                    </ul>
                </li>
                <li>State / Re-rendering / Contexts and Bound</li>
                <li>Eventing (IoC and regular)</li>
                <li>Routes / Routing / Navigation</li>
                <li>Material UI</li>
                <li>Forms</li>
                <li>Dialogs</li>
                <li>
                    <Link component={RouterLink} to="/dashboard/training/snackbars">
                        Snackbars
                    </Link>
                </li>

                <li>Slots / Plugs (Known / super structure)</li>
                <li>Layouts (and known slots)</li>
                <li>Dynamic Modules</li>
                <li>Tooling / Editors</li>
                <li>Cypress / Jest</li>
            </ul>
            <h3>Event Emitters</h3>

            {/* <Components.BasicWithCompositionAndProps />
            <Components.BasicWithComposition /> */}
        </div>
    )
}
