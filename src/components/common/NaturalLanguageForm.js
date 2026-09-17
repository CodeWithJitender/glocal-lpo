import React, { useState, useEffect, useRef } from "react";
import { Snackbar, Grid2 as Grid, Alert } from "@mui/material";

import { CircleArrow } from "@/components/Icons";

import Animate from "./Animate";

import * as styles from "./NaturalLanguageForm.module.scss";

export default function NaturalLanguageForm() {
  // References to keep track of elements
  const formRef = useRef(null);
  const overlayRef = useRef(null);

  // State to track which field is open and form values
  const [openFieldIndex, setOpenFieldIndex] = useState(-1);
  const [formValues, setFormValues] = useState({
    platform: "platform",
    time: "time",
		timezone: "time zone",
		name: "guest",
		email: "abc@xyz.com"
  });
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");

  // Handle click on the overlay (close all fields)
  const handleOverlayClick = () => {
    setOpenFieldIndex(-1);
  };

  // Update form values from child components
  const updateFormValue = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  // DropdownField component
  const DropdownField = ({ options, defaultValue, index, valueKey }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const fieldRef = useRef(null);

    // This was causing the infinite loop - removed the empty useEffect

    // Update parent's open field index when this field opens/closes
    useEffect(() => {
      if (openFieldIndex === index) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, [openFieldIndex, index]);

    const handleToggleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenFieldIndex(isOpen ? -1 : index);
    };

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      updateFormValue(valueKey, option);
      setOpenFieldIndex(-1);
    };

    return (
      <div
        ref={fieldRef}
        className={`${styles["nl-field"]} ${styles["nl-dd"]} ${isOpen ? styles["nl-field-open"] : ""}`}
      >
        <span className={styles["nl-field-toggle"]} onClick={handleToggleClick}>
          {formValues[valueKey]}
        </span>
        <ul>
          {options.map((option, i) => (
            <li
              key={i}
              className={option === formValues[valueKey] ? styles["nl-dd-checked"] : ""}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // InputField component
  const InputField = ({ placeholder, subline, index, valueKey }) => {
    const [value, setValue] = useState(formValues[valueKey]);
    const [isOpen, setIsOpen] = useState(false);
    const fieldRef = useRef(null);
    const inputRef = useRef(null);

    // This was causing the infinite loop - removed the empty useEffect

    // Update parent's open field index when this field opens/closes
    useEffect(() => {
      if (openFieldIndex === index) {
        setIsOpen(true);
        if (inputRef.current) inputRef.current.focus();
      } else {
        setIsOpen(false);
      }
    }, [openFieldIndex, index]);

    const handleToggleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenFieldIndex(isOpen ? -1 : index);
    };

    const handleSubmit = () => {
      const updatedValue = value.trim() !== "" ? value : placeholder;
      updateFormValue(valueKey, updatedValue);
      setOpenFieldIndex(-1);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    };

    const handleInputChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <div
        ref={fieldRef}
        className={`${styles["nl-field"]} ${styles["nl-ti-text"]} ${isOpen ? styles["nl-field-open"] : ""}`}
      >
        <span className={styles["nl-field-toggle"]} onClick={handleToggleClick}>
          {formValues[valueKey]}
        </span>
        <ul>
          <li className={styles["nl-ti-input"]}>
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className={styles["nl-field-go"]} onClick={handleSubmit}>
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#070C1E"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fillRule="nonzero"/></svg>
            </button>
          </li>
          <li
            className={styles["nl-ti-example"]}
            dangerouslySetInnerHTML={{ __html: subline }}
          />
        </ul>
      </div>
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
		if (formValues.name === "guest") {
			setStatus("error");
			setOpen(true);
			setMessage("Please enter your name");
			return;
		}
		if (formValues.time === "time") {
			setStatus("error");
			setOpen(true);
			setMessage("Please select time");
			return;
		}
		if (formValues.timezone === "time zone") {
			setStatus("error");
			setOpen(true);
			setMessage("Please select time zone");
			return;
		}
		if (formValues.platform === "platform") {
			setStatus("error");
			setOpen(true);
			setMessage("Please select platform");
			return;
		}
		if (formValues.email === "abc@xyz.com") {
			setStatus("error");
			setOpen(true);
			setMessage("Please enter your email");
			return;
		}
    const response = await fetch("/api/submit-small-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

		const result = await response.json();
		if (result.success) {
			setStatus("success");
		} else {
			setStatus("error");
		}
		setMessage(result.message);
		setOpen(true);
  };

	const handleClose = () => {
		setStatus("");
		setMessage("");
		setOpen(false);
	};

  return (
		<>
			<Grid
				size={{
					xs: 12,
					sm: 12,
					md: 12,
					lg: 8,
				}}
				className={styles.infoTextSection}
			>
				<Animate.FadeUp direction="up">
					<form
						ref={formRef}
						id="nl-form"
						className={styles["nl-form"]}
						onSubmit={handleSubmit}
					>
						Hi {" "}
						<InputField
							placeholder="guest"
							index={3}
							valueKey="name"
							subline="Enter your name"
						/>
						, Let's schedule your meeting for {" "}
						<DropdownField
							options={["10 am", "11 am", "12 am", "01 pm", "02 pm", "03 pm"]}
							defaultValue="time"
							index={0}
							valueKey="time"
						/> {" "}
						<DropdownField
							options={["EST", "CST", "MST", "PST", "HST"]}
							defaultValue="time zone"
							index={1}
							valueKey="timezone"
						/> {" "}
						on {" "}
						<DropdownField
							options={["Zoom", "Google Meet", "Phone call"]}
							defaultValue="platform"
							index={2}
							valueKey="platform"
						/>. Just share your email (
							<InputField
								placeholder="abc@xyz.com"
								index={4}
								valueKey="email"
								subline="Enter your email"
							/>
						), and let's make things happen!
						<div
							ref={overlayRef}
							className={`${styles["nl-overlay"]} ${
								openFieldIndex !== -1 ? styles["nl-field-open"] : ""
							}`}
							onClick={handleOverlayClick}
						/>
					</form>
				</Animate.FadeUp>
			</Grid>
			<Grid
				size={{
					xs: 12,
					sm: 12,
					md: 12,
					lg: 1,
				}}
				className={styles.winButton}
			>
				<Animate.FadeUp direction="up" delay="100ms">
					<CircleArrow onClick={handleSubmit} />
				</Animate.FadeUp>
			</Grid>
			<Snackbar
				open={open}
				autoHideDuration={5000}
				onClose={handleClose}
				anchorOrigin={{
					horizontal: 'center',
					vertical: 'top',
				}}
			>
				<Alert
					onClose={handleClose}
					severity={status}
					variant="filled"
					sx={{ width: '100%' }}
				>
					{message}
				</Alert>
			</Snackbar>
		</>
  );
}
