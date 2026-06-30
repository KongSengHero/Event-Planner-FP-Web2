import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const LockIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0110 0v4"></path>
    </svg>
);

const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const EyeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const EyeOffIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
);

export default function Login() {
    const {
        desiredName, setDesiredName,
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        error,
        handleCreateAccount,
        handleLogin,
    } = useAuth();
    const [isRegistering, setIsRegistering] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="auth-page">
            <div className="auth-card">
                {error && <p className="auth-error">{error}</p>}

                {!isRegistering ? (
                    /* ================= LOGIN FORM ================= */
                    <div>
                        <div className="auth-header">
                            <h1 className="auth-title">Welcome back</h1>
                            <p className="auth-subtitle">Sign in to your account</p>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Email</label>
                            <div className="input-wrap">
                                <span className="input-icon"><MailIcon /></span>
                                <input
                                    className="text-input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Password</label>
                            <div className="input-wrap">
                                <span className="input-icon"><LockIcon /></span>
                                <input
                                    className="text-input password-input"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="toggle-visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                            </div>
                        </div>

                        <button className="primary-btn" onClick={handleLogin}>Log In</button>

                        <p className="footer-text">
                            Don't have an account?{' '}
                            <button className="footer-link" onClick={() => setIsRegistering(true)}>Register here</button>
                        </p>
                    </div>
                ) : (
                    /* ================= CREATION FORM ================= */
                    <div>
                        <div className="auth-header">
                            <h1 className="auth-title">Create an account</h1>
                            <p className="auth-subtitle">Get started with your free account</p>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Username (Optional)</label>
                            <div className="input-wrap">
                                <span className="input-icon"><UserIcon /></span>
                                <input
                                    className="text-input"
                                    type="text"
                                    value={desiredName}
                                    onChange={(e) => setDesiredName(e.target.value)}
                                    placeholder="Username"
                                />
                            </div>
                            <p className="field-hint">If left blank, a default name will be assigned.</p>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Email</label>
                            <div className="input-wrap">
                                <span className="input-icon"><MailIcon /></span>
                                <input
                                    className="text-input"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Password</label>
                            <div className="input-wrap">
                                <span className="input-icon"><LockIcon /></span>
                                <input
                                    className="text-input password-input"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="toggle-visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                            </div>
                        </div>

                        <div className="field-group">
                            <label className="field-label">Confirm Password</label>
                            <div className="input-wrap">
                                <span className="input-icon"><LockIcon /></span>
                                <input
                                    className="text-input password-input"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    className="toggle-visibility"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                            </div>
                        </div>

                        <button className="primary-btn" onClick={handleCreateAccount}>Create Account</button>

                        <p className="footer-text">
                            Already have an account?{' '}
                            <button className="footer-link" onClick={() => setIsRegistering(false)}>Log In here</button>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}