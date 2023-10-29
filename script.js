var new_unique_id = uniqid();
var saveData = localStorage.getItem("lastname");
var notesCardsList = [];
$(".toggle__nav__options").on('click', function() {
    $("nav").toggleClass('active');
    $(".page-contents").toggleClass('active');
    $(".toggle__nav__options").toggleClass('active');
});
$(".hamburger").on("click", function() {
    $(".sidebar").toggleClass("sideVisible");
    if ($(".sidebar").hasClass("sideVisible")) {
        $(this).css("left", $(".sidebar").width() + 50);
        $(this).addClass("iconVisible");
    } else {
        $(this).css("left", 0);
        $(this).removeClass("iconVisible");
    }
});
function htmlToText(html) {
    return html.replace(/<[^>]+>/g, "").replace(/\n/g, " ").replaceAll("&nbsp;", " ");
}
$("#aboutToolBtn").on("click", function() {
    closePopup();
    $("#content").html('<div class="aboutTool">' + $("#aboutTool").html() + "</div>");
    $(".popup__title").html("About this Tool");
    showPopup("#aboutUsPopup");
});
function closeOnOutsideClick(className, btnClass) {
    var container = $(className);
    var btn = $(btnClass);
    if (!container.is(event.target) && !container.has(event.target).length && !btn.is(event.target) && !btn.has(event.target).length) {
        closePopup();
    }
}
$(document).on("click", ".popup__close, .tool__footer > .btn__primary, #click_close, .popup__dismiss", function() {
    closePopup();
});
function showPopup(id=null) {
    closePopup();
    $(".popup__wrapper").fadeIn(100).slideDown(100).css("display", "flex");
    $(".secondPopUp").hide();
    $(id).css({
        visibility: "visible",
        opacity: 1,
        top: "10%",
    }).show();
    $("body").css("overflow", "hidden");
}
function closePopup() {
    $(".secondPopUp").hide();
    $(".popup").css({
        visibility: "hidden",
        opacity: 0,
        top: "0%",
    }).hide();
    $("body").css("overflow", "auto");
    $(".popup__wrapper").fadeOut().slideUp().css("display", "none");
}
$(document).on("keyup", function(e) {
    if (e.keyCode === 27) {
        closePopup();
    }
});
var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
$("#fullscreen").on("click", function() {
    if (document.fullscreenElement) {
        closeFullscreen();
        $(this).closest(".tooltipTest").text("Full Screen");
        $(this).children("img.normalScreen").hide();
        $(this).children("img.fullScreen").show();
    } else {
        openFullscreen();
        $(this).closest(".tooltipTest").text("Exit Fullscreen");
        $(this).children("img.normalScreen").show();
        $(this).children("img.fullScreen").hide();
        $(this).removeClass("active");
    }
});
function showSharePopup() {
    closePopup();
    $(".popup__wrapper").fadeIn().slideDown().css("display", "flex");
    $(".popup").hide();
    $(".downloadPopup").hide();
    $(".sharePopup").css({
        visibility: "visible",
        opacity: 1,
        top: "10%",
    }).show();
}
$(document).on("click", "#shareDoc", function() {
    getUrlAjax();
    showSharePopup();
});
function getUrlAjax() {
    editId = user_unique_id ? user_unique_id : new_unique_id;
    $.ajax({
        type: "post",
        url: "notes/share",
        data: {
            id: editId,
            _token: $('meta[name="_token"]').attr("content"),
        },
        dataType: false,
        success: function(response) {
            var url = window.location.href;
            if (response)
                url = response;
            createShareableLink(url);
        },
    });
}
function createShareableLink(shareAbleUrl) {
    shareAbleText = `Say goodbye to the hassle of emailing yourself notes! 📝 With OnlineNotepad.io, you can easily create, save, and share notes online. Try it out for yourself: [insert link]  `;
    shareAbleText = shareAbleText.replaceAll("[insert link]", shareAbleUrl);
    $(".shareFacebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareAbleUrl);
    $(".shareTwitter").attr("href", `https://twitter.com/intent/tweet?text=${shareAbleText}&url=` + shareAbleUrl);
    $(".shareWhatsapp").attr("href", "https://wa.me/?text=" + encodeURIComponent(shareAbleText.replaceAll("%0A", "")) + shareAbleText);
    $(".shareLink").attr("data-copy", shareAbleUrl);
    $(".shareEmail").attr("href", "mailto:?subject=Check out this notepad!&body=" + shareAbleText);
}
$(document).on("click", ".shareLink", function() {
    var btn = $(this);
    var textToCopy = btn.data("copy").replace(/\s+/g, " ");
    $(".shareLink span.tooltipTest").text("Copied");
    $(".shareLink").addClass("active");
    setTimeout(function() {
        $(".shareLink").removeClass("active");
    }, 1500);
    navigator.clipboard.writeText(textToCopy);
});
function deleteContent(id) {
    deleteFromDatabase(id);
    if (localStorage.getItem("lastname")) {
        let jsonContent = JSON.parse(localStorage.getItem("lastname"));
        delete jsonContent[id];
    }
}
function deleteFromDatabase(id) {
    let _token = $("meta[name='_token']").attr("content");
    let formData = new FormData();
    formData.append("_token", _token);
    $.ajax({
        type: "post",
        url: `/notes/${id}/delete`,
        data: formData,
        dataType: false,
        processData: false,
        contentType: false,
        success: function(response) {
            addHtmlToCards(response.data);
        },
    });
}
$(document).on("click", ".deleteBtn", function() {
    let id = $(this).data("id");
    deleteContent(id);
});
$(".user__profile__btn").on('click', function() {
    $(".profile__div").toggleClass('d-none');
});
function showDownloadPopup() {
    closePopup();
    $(".popup__wrapper").fadeIn().slideDown().css("display", "flex");
    $(".sharePopup").hide();
    $(".downloadPopup").fadeIn().slideDown();
}
$("#downloadFile").on("click", function() {
    showDownloadPopup();
});
$(document).on("click", "#downloadFileBtn", function() {
    downloadType = $("#downloadFileBtn").attr("data-value");
    if (!emptyContent()) {
        if (downloadType === "txt") {
            downloadTxtFile();
        } else if (downloadType === "pdf") {
            $("#editorTextarea__text").val(quillJs.root.innerHTML);
            $('form[name="downloadPDF"]').submit();
        } else if (downloadType === "doc") {
            downloadWordFile();
        }
    } else {
        snapError("Please add some content to download file.", "No Content Found!");
    }
});
$(document).on("click", ".download__btn", function() {
    downloadType = $(this).data("value");
    $("#downloadFileBtn").attr("data-value", downloadType);
    $("#download_type_form").val(downloadType);
    $(this).addClass("active").siblings().removeClass("active");
});
$(document).on("click", "#downloadTXT", function() {
    downloadTxtFile();
    closePopup();
});
$(document).on("click", "#downloadWORD", function() {
    downloadWordFile();
    closePopup();
});
function downloadWordFile() {
    if (!emptyContent()) {
        let fileName = $("#doc__title").val().replaceAll(" ", "_") + "_onlinenotepad.io.doc";
        const editorContent = quillJs.root.innerHTML;
        const convertedContent = htmlDocx.asBlob(editorContent);
        saveAs(convertedContent, fileName);
    } else {
        snapError("No content to download", "No content found!");
    }
}
function downloadTxtFile() {
    if (!emptyContent()) {
        let fileName = $("#doc__title").val().replaceAll(" ", "_") + "_onlinenotepad.io.txt";
        const editorContent = quillJs.root.innerText;
        tempElem = document.createElement("a");
        tempElem.href = "data:text/plain," + encodeURI(editorContent);
        tempElem.target = "_blank";
        tempElem.download = fileName;
        tempElem.click();
    } else {
        snapError("No content to download", "No content found!");
    }
}
function emptyContent() {
    var content = quillJs.root.innerHTML;
    if ($.trim(content) == "") {
        return true;
    }
    return false;
}
function get(name) {
    if (name == "edit") {
        if (user_unique_id) {
            return user_unique_id.length !== 0 && user_unique_id;
        }
    } else if ((name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(location.search)))
        return decodeURIComponent(name[1]).replaceAll("#", "");
}
$("#txtFile").on("change", function() {
    var input = $(this).find("input");
    let uploadedFile = input[0].files[0];
    var fileExtension = ["docx", "pdf", "doc", "rtf", "txt"];
    switch (input.val().split(".").pop().toLowerCase()) {
    case "docx":
        ExtractTextFromDOC(uploadedFile, "editorTextarea");
        break;
    case "pdf":
        ExtractTextFromDOC(uploadedFile, "editorTextarea");
        break;
    case "rtf":
        ExtractTextFromRTF(uploadedFile, "editorTextarea");
        break;
    case "txt":
        ExtractTextFromTXT(uploadedFile, "editorTextarea");
        break;
    case "doc":
        ExtractTextFromDOC(uploadedFile, "editorTextarea");
        break;
    default:
        if ($.inArray(input.val().split(".").pop().toLowerCase(), fileExtension) == -1) {
            snapError("Only formats are allowed : " + fileExtension.join(", "), "Format Error!");
        }
    }
    updateCounts();
});
function ExtractTextFromTXT(uploadedFile, resultID) {
    var file = uploadedFile;
    var FR = new FileReader();
    FR.readAsText(file);
    FR.onload = function(data) {
        var txtResult = data.target.result;
        setQlText(txtResult);
        editId = txtResult !== "" && get("edit") ? get("edit") : new_unique_id;
        storeContent(txtResult, editId);
    }
    ;
}
function setQlText(content) {
    quillJs.setContents({
        ops: [{
            insert: content
        }],
    });
}
function ExtractTextFromRTF(uploadedFile, resultID) {
    var file = uploadedFile;
    var FR = new FileReader();
    FR.readAsText(file);
    FR.onload = function(data) {
        var txtResult = data.target.result;
        txtResult = txtResult.toString().replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "").replace(/\\par[d]?/g, "");
        setQlText(txtResult);
        editId = txtResult !== "" && get("edit") ? get("edit") : new_unique_id;
        storeContent(txtResult, editId);
    }
    ;
}
function ExtractTextFromDOC(uploadedFile, resultID) {
    let file = uploadedFile;
    $(".loader").show();
    let formData = new FormData();
    formData.append("file", file);
    $.ajax({
        type: "post",
        url: "getText",
        dataType: false,
        enctype: "multipart/form-data",
        processData: false,
        contentType: false,
        data: formData,
        headers: {
            "X-CSRF-TOKEN": $("meta[name='_token']").attr("content"),
        },
        success: (response)=>{
            setQlText(response);
            editId = response !== "" && get("edit") ? get("edit") : new_unique_id;
            storeContent(response, editId);
            $(".loader").hide();
        }
        ,
        error: (error)=>{
            console.log(error.responseJSON.message);
            snapError(error.responseJSON.message, "Error Detected!");
            $(".loader").hide();
        }
        ,
    });
}
function updateCounts() {
    var text = quillJs.root.innerText;
    if (text == '')
        return;
    var words = text.trim().split(/\s+/).filter(Boolean);
    var wordCount = words.length;
    var charCount = text.length;
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
}
function makeFocus() {
    alert('life');
}
if ($("#editorTextarea").length != 0) {
    $(function() {
        var toolbarOptions = [[{
            'header': [1, 2, 3, 4, 5, 6, false]
        }], ['bold', 'italic', 'underline'], [{
            'list': 'ordered'
        }, {
            'list': 'bullet'
        }], ['image'], ];
        var quillJs = new Quill('#editorTextarea',{
            modules: {
                syntax: false,
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });
        window.quillJs = quillJs;
        updateCounts();
        let editId = getEditorId() || new_unique_id;
        let color_scheme = localStorage.getItem("theme") === "dark" ? "dark" : "";
        let typingTimer23;
        let doneTypingInterval23 = 1500;
        function handleTextChange() {
            $("#doc__status").removeClass('d-none');
            updateCounts();
            var justHtml = quillJs.root.innerHTML;
            clearTimeout(typingTimer23);
            typingTimer23 = setTimeout(function() {
                if (storeContent(justHtml, editId)) {}
            }, doneTypingInterval23);
        }
        $('#doc__title').on('keydown', ()=>{
            $("#doc__status").removeClass('d-none');
            handleTextChange();
        }
        );
        quillJs.on("text-change", handleTextChange);
        quillJs.on("selection-change", function(range, oldRange) {
            handleSelection(range, oldRange)
        });
        if (get("edit")) {
            let docTitleElement = document.getElementById("doc__title");
            if (docTitleElement) {
                docTitleElement.value = user_title;
            }
        }
        $(".loader").hide();
    });
}
function isDeltaString(str) {
    const deltaRegex = /^{[\s\S]*?"ops":[\s\S]*?}$/;
    return deltaRegex.test(str);
}
function isJSON(str) {
    try {
        console.log(JSON.parse(str));
        return JSON.parse(str) && !!str;
    } catch (e) {
        return false;
    }
}
function filePickerCallBack(callback, value, meta) {
    if (meta.filetype == "file") {
        var input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.onchange = function() {
            var file = this.files[0];
            var formData2 = new FormData();
            formData2.append("file", file);
            formData2.append("_token", $("meta[name='_token']").attr("content"));
            $.ajax({
                url: "/upload",
                type: "POST",
                data: formData2,
                contentType: false,
                processData: false,
                dataType: false,
                success: function(response) {
                    callback(response.url);
                },
                error: function(xhr, status, error) {
                    console.log("Error: " + status + ": " + error);
                },
            });
        }
        ;
        input.click();
    }
}
function imageUploadHandlerTinymce(blobInfo, success, failure) {
    var xhr, formData;
    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", "/upload");
    xhr.onload = function() {
        var json;
        if (xhr.status != 200) {
            failure("HTTP Error: " + xhr.status);
            return;
        }
        json = JSON.parse(xhr.responseText);
        if (!json || typeof json.url != "string") {
            failure("Invalid JSON: " + xhr.responseText);
            return;
        }
        success(json.url);
    }
    ;
    formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());
    formData.append("_token", $("meta[name='_token']").attr("content"));
    xhr.send(formData);
}
var typingTimer;
var doneTypingInterval = 700;
$("#doc__title").on("input", function() {
    const isNewDoc = get("new") == "true";
    let editId = false;
    if (isNewDoc) {
        window.history.pushState({}, document.title, "/");
        return false;
    } else if (get("edit")) {
        editId = get("edit");
    } else {
        editId = false;
    }
    if (!emptyContent() && editId) {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function() {
            storeContent(quillJs.root.innerHTML, editId);
        }, doneTypingInterval);
    }
});
function getEditorId() {
    const isNewDoc = get("new") == "true";
    if (isNewDoc) {
        window.history.pushState({}, document.title, "/");
        return false;
    } else if (get("edit")) {
        editId = get("edit");
    } else {
        editId = loadContentOnReload() ? parseInt(loadContentOnReload()) : false;
    }
    if (editId) {
        return editId;
    }
}
function storeContent(content, id=false, clone=false) {
    if (content === "") {
        console.log("Empty content");
        return;
    }
    const updateTime = new Date();
    createdAt = new Date();
    if (user_created_at) {
        createdAt = user_created_at;
    }
    const title = $("#doc__title").val() || `Untitled Document (${parseInt(untitledNumber) + 1})`;
    const record = {
        content,
        title,
        date: createdAt,
        updated_at: updateTime,
    };
    record.unique_id = id ? id : unique_id();
    record._token = $("meta[name='_token']").attr("content");
    if (clone) {
        record.unique_id = id;
        record.clone = true;
    }
    var url = "/?clone=" + record.unique_id;
    storeAjax(record);
    let saveData = localStorage.getItem("user_record");
    const saveDataContent = saveData ? saveData : "{}";
    const userContent = JSON.parse(saveDataContent);
    userContent[record.unique_id] = record;
    $("#doc__status").addClass('d-none');
    localStorage.setItem("user_record", JSON.stringify(userContent));
    if (clone) {
        return window.open(url, "_blank");
    }
    return true;
}
localStorage.setItem("user_record", JSON.stringify({}));
const userContent = localStorage.getItem("user_record") ? localStorage.getItem("user_record") : "{}";
loadContentFromDatabase()
function loadContentFromDatabase() {
    $.ajax({
        type: "post",
        url: "/load_content_from_database",
        dataType: false,
        success: function(response) {
            newContent = Object.assign(JSON.parse(userContent), response);
            localStorage.setItem("user_record", JSON.stringify(newContent));
        }
    });
}
window.addEventListener('load', function() {
    loadCards();
    setTimeout(function() {
        storeOldData();
    }, 3000);
})
function storeOldData() {
    if (localStorage.getItem("lastname")) {
        data = "{}";
        data = JSON.parse(localStorage.getItem("lastname"));
        $.ajax({
            type: "post",
            url: "/notes/store/all",
            data: data,
            headers: {
                "X-CSRF-TOKEN": $("meta[name='_token']").attr("content"),
            },
            dataType: false,
            success: function(response) {
                localStorage.setItem("lastname", "");
            },
        });
    }
}
function storeAjax(data) {
    $.ajax({
        type: "post",
        url: "/notes/store",
        data: data,
        dataType: false,
        success: function(response) {
            console.log(response);
        },
    });
}
function clone() {
    if (quillJs.root) {
        storeContent(quillJs.root.innerHTML, uniqid(), true);
    } else {
        snapError("Error! Empty Document.", "Oh Snap!");
    }
}
function createPlaceHolder(id) {
    if ($("#doc__title").val() == "") {
        placeHolder = "Untitled Document (" + (parseInt(untitledNumber) + parseInt(1)) + ")";
        $("#doc__title").attr("placeholder", placeHolder);
    }
}
createPlaceHolder();
$(document).mouseup(function(e) {
    var container = $(".search");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#searchResult").hide();
    }
});
$("#viewAllBtn").on("click", function() {
    loadCards();
    $("#viewcontent").html($("#viewAllBox").html());
    $(".popup__title").html("View All Files");
    showPopup("#viewAllContentPopup");
});
$(".new__label__button").on('click', function() {
    $("#viewcontent").slideUp('fast');
    $('.label__wrapper').slideDown('fast');
    $(this).slideUp('fast');
});
function loadCards() {
    $.ajax({
        type: "post",
        url: "/notes/view/all",
        data: {
            _token: $("meta[name='_token']").attr("content"),
        },
        dataType: "json",
        success: function(response) {
            viewAllHTML = "";
            if (response.data.length > 0) {
                return addHtmlToCards(response.data);
            } else {
                viewAllHTML = "<h3> No Documents Found! </h3>";
            }
            $(".cardsRow").html(" ");
            $(".cardsRow").html(viewAllHTML);
        },
    });
}
function loadFeedback() {
    $.ajax({
        type: "post",
        url: "/notes/feedback",
        data: {
            _token: $("meta[name='_token']").attr("content"),
        },
        dataType: "json",
        success: function(response) {
            if (!response.status) {
                closePopup()
                $(".emoji_box").addClass("visible");
                $(".message_box").removeClass("visible");
                showPopup(".feedback__popup")
            }
        },
    });
}
function addHtmlToCards(data) {
    notesCardsList = data;
    viewAllHTML = "";
    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            var labels = data[i].label_id || '';
            if (labels != '') {
                labels = JSON.parse(labels).join(', ');
            }
            var labelsColors = ``;
            (data[i].labels).forEach(label=>{
                labelsColors += `<span style="background: ${label.color};display:block;width: 12px; height: 12px;border-radius: 100px"></span>`;
            }
            );
            viewAllHTML += `<div class="viewCard" data-label='${labels}'>
            <div class="card__content">
              <p>
                ${htmlToText(`${data[i].content}`)}
              </p>
              <div class="layer">
              <a href="/?edit=${data[i]["unique_id"]}"> Open File </a>
              </div>
            </div>
            <div class="card__footer">
            <div>
              <h4 class="card__title">${data[i].title}</h4>
                <small>Updated: ${formatDate(data[i]["updated_at"])}</small>
            </div>
            <div>
                <div style="gap: 5px;flex-wrap: wrap;max-width: 40px;">
                    ${labelsColors}
                </div>
                <div>
                    <button data-id='${data[i]["unique_id"]}' class="deleteBtn">
                    <img src="/web_assets/frontend/images/delete.svg"
                        alt="delete" />
                    </button>
                    <button data-id='${data[i]["unique_id"]}' class="labelBtn">
                    <img src="/web_assets/frontend/images/label-icon.svg"
                        alt="delete" />
                    </button>
                </div>
              </div>
            </div>
            </div> 
            </div>`;
        }
    } else {
        viewAllHTML = "<h3> No Documents Found! </h3>";
    }
    $("#viewcontent .cardsRow").html(viewAllHTML);
}
function formatDate(date) {
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{6}Z$/.test(date)) {
        const dateObj = new Date(date);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];
        const year = dateObj.getFullYear();
        const month = months[dateObj.getMonth()];
        const day = dateObj.getDate();
        return `${month} ${day}, ${year}`;
    }
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
function sortByDate(obj) {
    const sortedObj = Object.fromEntries(Object.entries(obj).sort(([,a],[,b])=>Date.parse(b.date) - Date.parse(a.date)));
    return sortedObj;
}
function sortByRecentUpDate(obj) {
    const sortedObj = Object.fromEntries(Object.entries(obj).sort(([,a],[,b])=>Date.parse(b.updated_at) - Date.parse(a.updated_at)));
    return sortedObj;
}
var isNewDoc = get("new") == "true";
function loadContentOnReload() {
    if (saveData && !get("edit") && !isNewDoc) {
        data = "{value = '..'}";
        var recentUpdated = sortByRecentUpDate(JSON.parse(saveData));
        returnValue = Object.keys(recentUpdated).map(function(value, index) {
            if (index == 0) {
                const content = recentUpdated[value]["content"];
                const title = recentUpdated[value]["title"];
                $("#doc__title").val(title);
                quillJs.setContents(content);
                return value;
            } else {
                return;
            }
        });
        return returnValue[0];
    }
}
function searchHighlight(searchArray, searchTerm, localStorageSearch=false) {
    if (localStorageSearch) {
        data = searchObject(searchArray, searchTerm, true);
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const item = data[key];
                const regex = new RegExp(`${searchTerm}`,"gi");
                let highlightedTitle = item.title.replace(regex, "<mark>$&</mark>");
                let highlightedContent = htmlToText(item.content).replace(regex, "<mark>$&</mark>");
                let highlightedDate = item.content.replace(regex, "<mark>$&</mark>");
                if (highlightedTitle !== item.title) {
                    item.title = trimText(getContext(highlightedTitle, searchTerm, 5), 10);
                } else if (highlightedContent !== item.content) {
                    item.content = trimText(getContext(highlightedContent, searchTerm, 5), 10);
                } else if (highlightedDate === item.date) {
                    item.date = item.date;
                }
                item.content = trimText(getContext(item.content, searchTerm, 5), 10);
                data[key] = item;
            }
        }
        return data;
    }
    let searchData = [];
    console.log(searchArray)
    if (searchTerm.length > 0) {
        for (const key in searchArray) {
            if (searchArray.hasOwnProperty(key)) {
                console.log(searchArray, searchArray[key])
                const itemRes = searchArray[key];
                const regex = new RegExp(`${searchTerm}`,"gi");
                itemRes.title = htmlToText(itemRes.title);
                itemRes.content = htmlToText(itemRes.content);
                let highlightedTitle = itemRes.title.replace(regex, "<mark>$&</mark>");
                let highlightedContent = itemRes.content.replace(regex, "<mark>$&</mark>");
                let highlightedDate = itemRes.created_at.replace(regex, "<mark>$&</mark>");
                if (highlightedTitle !== itemRes.title) {
                    itemRes.title = highlightedTitle;
                } else if (highlightedContent !== itemRes.content) {
                    itemRes.content = trimText(getContext(highlightedContent, searchTerm, 5), 10);
                } else if (highlightedDate === itemRes.created_at) {
                    itemRes.created_at = itemRes.created_at;
                }
                searchData[key] = itemRes;
            }
        }
        return searchData;
    }
}
function trimText(text, maxLength) {
    const words = text.split(" ");
    if (words.length > maxLength) {
        const trimmedWords = words.slice(0, maxLength);
        return `${trimmedWords.join(" ")}...`;
    } else {
        return text;
    }
}
function getContext(text, term, contextWords) {
    const words = text.split(" ");
    const termIndex = words.findIndex((word)=>word.includes("<mark>"));
    if (termIndex === -1) {
        return text;
    }
    const startIndex = Math.max(0, termIndex - contextWords);
    const endIndex = Math.min(words.length - 1, termIndex + contextWords);
    let context = words.slice(startIndex, endIndex + 1).join(" ");
    if (startIndex > 0) {
        context = `... ${context}`;
    }
    if (endIndex < words.length - 1) {
        context = `${context} ...`;
    }
    return context;
}
window.addEventListener("load", function() {
    setTimeout(function() {
        if ($(".cardsRow").children().length >= 3 & !localStorage.getItem("feedback_submitted")) {
            loadFeedback();
        }
    }, 3000);
});
$("#search").on("keyup", ()=>{
    let searchKey = $("#search").val();
    let typingTimer2;
    let doneTypingInterval2 = 300;
    if (!localStorage.getItem("user_record")) {
        $("#searchResults").html("");
        clearTimeout(typingTimer2);
        typingTimer2 = setTimeout(function() {
            searchKey.length > 0 && searchUsingAjax(searchKey);
        }, doneTypingInterval2);
    }
    let userContent = JSON.parse(localStorage.getItem("user_record"));
    let arr = searchHighlight(userContent, searchKey, true);
    let html = "";
    if (!jQuery.isEmptyObject(arr)) {
        Object.keys(arr).map((obj)=>{
            const created_at = formatDate(new Date(arr[obj].date));
            const updated_at = formatDate(new Date(arr[obj].updated_at));
            html += `<li onclick='window.location.href = "?edit=${obj}"' class="searchResults">
                <a href="/?edit=${obj}"> ${arr[obj].title} </a>
                    <div style='font-size:10px' href="/?edit=${obj}">
                        ${arr[obj].content}
                    </div>
                    <small>Last Modified: ${updated_at} </small>
                    </li>`;
        }
        );
        searchKey.length > 1 ? $("#searchResult").show().html(html) : $("#searchResult").hide();
    } else {
        $("#searchResult").html("<p>No result found</p>");
    }
}
);
function searchUsingAjax(searchKey) {
    $.ajax({
        type: "post",
        url: "/search",
        dataType: "json",
        data: {
            searchKey: searchKey,
            _token: $("meta[name='_token']").attr("content"),
        },
        success: function(response) {
            if (response.data.length > 0) {
                showSearchList(response.data, searchKey);
            } else {
                $("#searchResult").html("<p>No result found</p>");
            }
        },
    });
}
function showSearchList(response, searchKey) {
    let html = "";
    let highlightData = searchHighlight(response, searchKey);
    highlightData.forEach(function(item) {
        const created_at = formatDate(new Date(item.created_at));
        const updated_at = formatDate(new Date(item.updated_at));
        html += `<li class="searchResults">
                    <a href="/?edit=${item.unique_id}"> ${item.title} </a>
                        <div style='font-size:10px' href="/?edit=${item.unique_id}">
                            ${item.content}
                        </div>
                        <small>Last Modified: ${updated_at} </small>
                        </li>`;
    });
    searchKey.length > 1 ? $("#searchResult").show().html(html) : $("#searchResult").hide();
}
$("#searchBtn").on("click", function() {
    closePopup();
    showPopup("#searchPopup");
    $("#search").focus();
});
function searchObject2(arr, query) {
    query = query.toLowerCase();
    const results = [];
    user_content_all.forEach((item)=>{
        if (htmlToText(item.title).toLowerCase().includes(query) || htmlToText(item.content).toLowerCase().includes(query) || item.created_at.toLowerCase().includes(query) || item.updated_at.toLowerCase().includes(query)) {
            htmlToText(item.content);
            results.push(item);
        }
    }
    );
    return results;
}
function searchObject(obj, query, localStorageSearch=false) {
    if (localStorageSearch) {
        query = query.toLowerCase();
        const results = {};
        Object.keys(obj).forEach((key)=>{
            const item = obj[key];
            if (htmlToText(item.content).toLowerCase().includes(query) || htmlToText(item.title).toLowerCase().trim().includes(query) || htmlToText(item.date).toLowerCase().trim().includes(query)) {
                results[key] = item;
            }
        }
        );
        return results;
    }
    query = query.toLowerCase();
    const results = {};
    Object.keys(user_content_all).forEach((key)=>{
        if (htmlToText(item.content).toLowerCase().includes(query) || htmlToText(item.title).toLowerCase().trim().includes(query) || htmlToText(item.created_at).toLowerCase().trim().includes(query)) {
            results[key] = item;
        }
    }
    );
    return results;
}
document.addEventListener("keydown", function(e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
        e.preventDefault();
        showPopup("#searchPopup");
        $("#search").focus();
    }
});
document.querySelector("#toggle").addEventListener("click", toggle);
function toggle() {
    try {
        if (localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
        window.location.reload();
    } catch (e) {
        console.log(e);
    }
}
$("#themeDark").on('click', function() {
    localStorage.setItem("theme", "dark-green");
    document.querySelector("html").classList = []
    document.querySelector("html").classList.add("dark-green");
});
$("#themeLight").on('click', function() {
    localStorage.setItem("theme", "light");
    document.querySelector("html").classList = []
    document.querySelector("html").classList.add("light");
});
$("#themeSystem").on('click', function() {
    document.querySelector("html").classList = []
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem("theme", "dark");
        document.querySelector("html").classList.add("dark");
    } else {
        localStorage.setItem("theme", "light");
        document.querySelector("html").classList.remove("dark");
    }
});
function uniqid() {
    let time = new Date().getTime().toString(16);
    let rand = Math.floor(Math.random() * 65535).toString(16);
    return time + rand;
}
$("#loginBtn").on("click", function() {
    closePopup();
    showPopup(".login_popup");
});
$("#feedbackBtn").on("click", function() {
    closePopup();
    showPopup(".feedback__popup");
    $(".feedback__popup").removeClass('feedback__success');
    $(".feedback__popup > div").removeClass('d-none');
    $(".feedback__success__msg").addClass('d-none');
    $("#send_feedback").removeClass('disable').prop('disabled', false);
    $(".feedback__popup #message").val('');
    $(".emoji_box > button").removeClass('active');
    $(".emoji_box").addClass("visible");
    $(".message_box").removeClass("visible");
});
$(document).on('click', '.feedback_close', function() {
    localStorage.setItem("feedback_submitted", "true");
})
$(document).on("click", ".feedback_btn", function() {
    $(this).addClass("active").siblings().removeClass("active");
    let feedbackVal = $(this).attr("data-value");
    $("#feedbackVal").val(feedbackVal);
    $(".message_box").addClass("visible");
    $(".emoji_box").removeClass("visible");
});
$(document).on("click", "#send_feedback", function() {
    let feedbackVal = $("#feedbackVal").val();
    let feedbackMsg = $("#message").val();
    if (feedbackVal == "") {
        snapError("Please select a feedback", "Oh Snap!");
        return false;
    }
    if (feedbackMsg == "") {
        snapError("Please write a feedback", "Oh Snap!");
        return false;
    }
    $("#send_feedback").addClass('disable').prop('disabled', true);
    $.ajax({
        type: "post",
        url: "/feedback",
        dataType: "json",
        data: {
            feedback_val: feedbackVal,
            message: feedbackMsg,
            _token: $("meta[name='_token']").attr("content"),
        },
        success: function(response) {
            if (response.status == true) {
                localStorage.setItem("feedback_submitted", true)
                $(".feedback__popup").addClass("feedback__success");
                $(".feedback__success__msg").removeClass('d-none');
                $(".feedback__popup > div").addClass('d-none');
                $(".feedback__success__msg").removeClass('d-none');
                setTimeout(function() {
                    closePopup();
                }, 3000);
            }
        },
    });
});
function calculateSizeInKB(text) {
    let bytes = new TextEncoder().encode(text);
    let kilobytes = bytes.length / 1024;
    return kilobytes.toFixed(2);
}
function snapError(err, title) {
    closePopup();
    $(".snap_title").text(title);
    $(".error__message").text(err);
    showPopup(".errorSnap");
}
function getUsedSpaceOfLocalStorageInBytes() {
    var b = 0;
    for (var key in window.localStorage) {
        if (window.localStorage.hasOwnProperty(key)) {
            b += key.length + localStorage.getItem(key).length;
        }
    }
    return b;
}
function getUnusedSpaceOfLocalStorageInBytes() {
    var maxByteSize = 10485760;
    var minByteSize = 0;
    var tryByteSize = 0;
    var testQuotaKey = 'testQuota';
    var timeout = 20000;
    var startTime = new Date().getTime();
    var unusedSpace = 0;
    do {
        runtime = new Date().getTime() - startTime;
        try {
            tryByteSize = Math.floor((maxByteSize + minByteSize) / 2);
            localStorage.setItem(testQuotaKey, String('1').repeat(tryByteSize));
            minByteSize = tryByteSize;
        } catch (e) {
            maxByteSize = tryByteSize - 1;
        }
    } while ((maxByteSize - minByteSize > 1) && runtime < timeout);
    localStorage.removeItem(testQuotaKey);
    if (runtime >= timeout) {
        console.log("%cUnused space calculation may be off due to timeout.", "color:red;");
    }
    unusedSpace = tryByteSize + testQuotaKey.length - 1;
    return unusedSpace;
}
$("#applications").on("click", function() {
    closePopup();
    showPopup(".applicationsPopup");
})
window.addEventListener('resize', handleScreenSizeChange);
function handleScreenSizeChange() {
    removeFloatingToolbar();
}
function removeFloatingToolbar() {
    if (window.innerWidth > 940) {
        document.querySelector('.ql-toolbar').removeAttribute('style');
    }
}
function handleSelection(range) {
    if (window.innerWidth <= 940) {
        if (range && range.length > 0) {
            showFloatingToolbar(range);
        } else {
            hideFloatingToolbar();
        }
    } else {
        removeFloatingToolbar();
    }
}
function showFloatingToolbar(range) {
    var rect = window.quillJs.getBounds(range.index, range.length);
    var parentContainer = document.querySelector('.ql-toolbar').parentNode;
    var toolbar = document.querySelector('.ql-toolbar');
    toolbar.style.display = 'block';
    var parentRect = parentContainer.getBoundingClientRect();
    var toolbarHeight = toolbar.offsetHeight;
    var topOffset = rect.top + parentRect.top - toolbarHeight + window.scrollY;
    var toolbarWidth = toolbar.offsetWidth;
    var leftOffset = rect.left - parentRect.left;
    if (leftOffset > (parentRect.right - toolbarWidth)) {
        leftOffset = (parentRect.right - toolbarWidth);
    }
    toolbar.style.top = topOffset + 'px';
    toolbar.style.left = leftOffset + 'px';
}
function hideFloatingToolbar() {
    var dropdown = document.querySelector('.ql-toolbar .ql-formats');
    var isActive = dropdown.firstElementChild.classList.contains('ql-expanded');
    if (!isActive) {
        var toolbar = document.querySelector('.ql-toolbar');
        toolbar.style.display = 'none';
    }
}
$(document).on('click', ".label__color__list span", function() {
    $(this).addClass('active').siblings().removeClass('active');
});
$(".add__label__button").on('click', function() {
    var color = $('#label__color__list').val();
    var name = $(".label__name__input").val();
    $.ajax({
        type: "post",
        url: "label-store",
        data: {
            color: color,
            name: name,
            _token: $('meta[name="_token"]').attr("content"),
        },
        dataType: false,
        success: function(response) {
            if (response.sts == true) {
                $(".label__errors").html('');
                labelList = response.labelList;
                $(".setting__label__list h4 span").text(labelList.length);
                var labels = ``;
                labelList.forEach(label=>{
                    labels += `
                    <div data-id="${label.id}">
                        <span style="background: ${label.color}"></span>
                        <p>${label.name}</p>
                    </div>
                `;
                }
                );
                $(".label__list").html(labels);
                $(".label__name__input").val('');
                $(".label__color__list span").removeClass('active');
            } else {
                $(".label__errors").html(`<p class="error__element"><span>${response.msg}</span> <span>X</span></p>`);
            }
        },
        error: function(jqXHR) {
            var errorsList = ``;
            if (jqXHR.status === 422) {
                var errors = jqXHR.responseJSON.errors;
                for (var key in errors) {
                    var error = errors[key];
                    error.map((e,i)=>{
                        errorsList += `<p class="error__element"><span>${e}</span> <span>X</span></p>`;
                    }
                    );
                }
                $(".label__errors").html(errorsList);
            } else {
                console.log('Other Error:', jqXHR.statusText);
            }
        }
    });
});
$("#show__label__dropdown").on('click', function() {
    $("#filter__by__label").toggleClass('show');
});
$("#new__label__id").on('click', function() {
    $("#new__label__dropdown").toggleClass('show');
});
$(document).on('click', '.labelBtn', function() {
    $("#assignLabelBtn").data('noteId', $(this).data('id'));
    $(".assign__label").toggleClass('show')
});
$("#dismissLabelPopup").on('click', function() {
    $(".assign__label").toggleClass('show')
})
$("#assignLabelBtn").on('click', function() {
    var labelId = $(this).data('labelId')
    labelIdList = labelId;
    var labelCardId = $(this).data('noteId');
    $.ajax({
        type: "post",
        url: "assignLabelToNotes",
        data: {
            labelIdList: labelIdList,
            labelCardId: labelCardId,
            _token: $('meta[name="_token"]').attr("content"),
        },
        dataType: false,
        success: function(response) {
            addHtmlToCards(response);
            $(".assign__label").toggleClass('show')
        },
    });
});
$(document).on('click', '#new__label__id > div:nth-child(2) p', function() {
    $('#new__label__id > div:nth-child(1) p').text($(this).text()).data('id', $(this).data('id'));
    $("#assignLabelBtn").data('labelId', $(this).data('id'));
    $("#new__label__dropdown").removeClass('show');
});
$("#filter__by__label p").on('click', function() {
    $(this).data('id');
    if ($(this).data('id') == 'all') {
        $("#show__label__dropdown p").text($(this).text());
        $("#filter__by__label").removeClass('show');
        $(".cardsRow > div").removeClass('d-none');
        return;
    }
    var noteCards = $(".cardsRow > div");
    noteCards.each((i,e)=>{
        if (typeof $(e).data('label') == 'number') {
            if ($(e).data('label') == $(this).data('id')) {
                $(e).removeClass('d-none');
            } else {
                $(e).addClass('d-none');
            }
        } else {
            if ($(e).data('label').includes($(this).data('id'))) {
                $(e).removeClass('d-none');
            } else {
                $(e).addClass('d-none');
            }
        }
        $("#show__label__dropdown p").text($(this).text());
        $("#filter__by__label").removeClass('show');
    }
    );
});
$("#notes__filter").on('change', function() {
    var filterBy = $(this).val();
    let filteredData = filterData(filterBy, notesCardsList);
    let viewAllHTML = convertToHTML(filteredData);
    $('#viewcontent').html(viewAllHTML);
});
function filterData(filterBy, data) {
    switch (filterBy) {
    case 'a-z':
        data.sort((a,b)=>a.title.localeCompare(b.title));
        data = convertArrayToObjectArraysWithAlphabets(data);
        break;
    case 'z-a':
        data.sort((a,b)=>b.title.localeCompare(a.title));
        data = convertArrayToObjectArraysWithAlphabets(data);
        break;
    case 'recent':
        data.sort((a,b)=>new Date(b.updated_at) - new Date(a.updated_at));
        break;
    default:
        break;
    }
    return data;
}
function convertArrayToObjectArraysWithAlphabets(arr) {
    const result = [];
    const objectGroups = {};
    arr.forEach((item)=>{
        const firstLetter = item.title[0].toUpperCase();
        if (!objectGroups[firstLetter]) {
            objectGroups[firstLetter] = [];
        }
        objectGroups[firstLetter].push(item);
    }
    );
    const sortedKeys = Object.keys(objectGroups);
    sortedKeys.forEach((key)=>{
        result.push([key, objectGroups[key]]);
    }
    );
    return result;
}
$("#searchBtn, #popup__searchBtn").on("click", function() {
    closePopup();
    showPopup("#searchPopup");
    $("#search").focus();
});
function convertToHTML(data) {
    var viewAllHTML = `<div class="filtered__content">`;
    for (let z = 0; z < data.length; z++) {
        var filterTag = data[z][0];
        var fliterTagArray = data[z][1];
        var filterTagHtml = `<p>${filterTag}</p><div>`;
        for (let i = 0; i < fliterTagArray.length; i++) {
            var labels = data[i].label_id || '';
            if (labels != '') {
                labels = JSON.parse(labels).join(', ');
            }
            filterTagHtml += `<div class="viewCard" data-label='${labels}'>
            <div class="card__content">
              <p>
                ${htmlToText(`${fliterTagArray[i].content}`)}
              </p>
              <div class="layer">
              <a href="/?edit=${fliterTagArray[i]["unique_id"]}"> Open File </a>
              </div>
            </div>
            <div class="card__footer">
            <div>
              <h4 class="card__title">${fliterTagArray[i].title}</h4>
                <small>Updated: ${formatDate(fliterTagArray[i]["updated_at"])}</small>
            </div>
              <div>
                    <button data-id='${fliterTagArray[i]["unique_id"]}' class="deleteBtn">
                    <img src="/web_assets/frontend/images/delete.svg"
                        alt="delete" />
                    </button>
                    <button data-id='${fliterTagArray[i]["unique_id"]}' class="labelBtn">
                    <img src="/web_assets/frontend/images/label-icon.svg"
                        alt="delete" />
                    </button>
              </div>
            </div> 
            </div>`;
        }
        viewAllHTML += filterTagHtml + '</div>';
    }
    return viewAllHTML + '</div>';
}
function getWeekNumberInMonth(date) {
    const firstDayOfMonth = new Date(date.getFullYear(),date.getMonth(),1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const weekNumber = Math.ceil((date.getDate() + dayOfWeek) / 7);
    return weekNumber;
}
function getMonthName(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
$('.show__profile__setting').on('click', function() {
    $(".setting__tabs").addClass('d-none');
    $('.profile__wrapper').removeClass('d-none');
    $('.setting__nav__tabs').removeClass('active');
    $(this).addClass('active');
});
$('.show__preferences__setting').on('click', function() {
    $(".setting__tabs").addClass('d-none');
    $('.profile__preferences').removeClass('d-none');
    $('.setting__nav__tabs').removeClass('active');
    $(this).addClass('active');
});
$('.show__label__setting').on('click', function() {
    $(".setting__tabs").addClass('d-none');
    $('.settings__label').removeClass('d-none');
    $('.setting__nav__tabs').removeClass('active');
    $(this).addClass('active');
});
