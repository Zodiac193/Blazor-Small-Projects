window.ShowToastr = (type, message) => {
    if (type == "success")
    {
        toastr.success(message, "Toastr JS Success", { timeOut: 5000 });
    }
    if (type == "error")
    {
        toastr.error(message, "Toastr JS Failure", { timeOut: 5000 });
    }
}

window.ShowSweet = (type, message) => {
    if (type === "success") {
        Swal.fire(
            'Successful Notification!',
            message,
            'success'
        )
    }
    if (type === "error") {
        Swal.fire(
            'Error Notification!',
            message,
            'error'
        )
    }
}

function ShowDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('show');
}

function HideDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('hide');
}

