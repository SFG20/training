import Page from "minimals-template/components/Page"
import { errorSnackbar, infoSnackbar, snackbar, warningSnackbar } from "lib/snackbar"

window.DashboardRoute.register("/dashboard/training/snackbars", <ActivateSnackBar />)

export function ActivateSnackBar() {
    return (
        <Page>
            <button type="button" onClick={() => errorSnackbar("ERROR!")}>
                Error SnackBar
            </button>
            <button type="button" onClick={() => warningSnackbar("WARNING!")}>
                Warning SnackBar
            </button>
            <button type="button" onClick={() => infoSnackbar("INFO!")}>
                Info SnackBar
            </button>
            <button type="button" onClick={() => snackbar("Success!")}>
                SnackBar
            </button>
        </Page>
    )
}
