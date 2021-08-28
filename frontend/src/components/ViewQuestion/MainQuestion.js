import { Avatar } from "@material-ui/core";
import React from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
import ReactQuill from "react-quill";
import Editor from "react-quill/lib/toolbar";

function MainQuestion() {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  Editor.modules = {
    syntax: false,
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">
            How to optimise a for loop for faster execution time
          </h2>
          <a href="/add-question">
            <button>Ask Question</button>
          </a>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
              Asked<span>today</span>
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>

                <BookmarkIcon />

                <HistoryIcon />
              </div>
            </div>
            <div className="question-answer">
              <p>
                I am looking to optimize a loop using loop unswitching and SIMD
                so that I can speedup execution time.
              </p>

              <div className="author">
                <small>asked 1 min ago</small>
                <div className="auth-details">
                  <Avatar />
                  <p>Christine Lane</p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <p>
                    Loop unswitching works when the condition has a constant
                    value throughout the loop. But here, since fxp is modified
                    inside the loop, the truth value of fxp 0 may change during
                    the loop. So I don't see how to unswitch it here. Unless you
                    know something about the values in the LUT array that prove
                    this can't happen? <span>- Nate Eldredge</span> {"    "}
                    <small>Time ago</small>
                  </p>
                </div>
                <p>Add a comment</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            1 Answer
          </p>
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>

                <BookmarkIcon />

                <HistoryIcon />
              </div>
            </div>
            <div className="question-answer">
              I am looking to optimize a loop using loop unswitching and SIMD so
              that I can speedup execution time.
              <div className="author">
                <small>asked 1 min ago</small>
                <div className="auth-details">
                  <Avatar />
                  <p>Christine Lane</p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <p>
                    Loop unswitching works when the condition has a constant
                    value throughout the loop. But here, since fxp is modified
                    inside the loop, the truth value of fxp 0 may change during
                    the loop. So I don't see how to unswitch it here. Unless you
                    know something about the values in the LUT array that prove
                    this can't happen? <span>- Nate Eldredge</span> {"    "}
                    <small>Time ago</small>
                  </p>
                </div>
                <p>Add a comment</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div> */}
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          modules={Editor.modules}
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
  );
}

export default MainQuestion;
