import React, { useState } from "react";
import { Layout } from "../components/neo/Layout";
import { Button } from "../components/neo/Button";
import { Input } from "../components/neo/Input";
import { Card } from "../components/neo/Card";
import { Badge } from "../components/neo/Badge";
import { Switch } from "../components/neo/Switch";
import { Checkbox } from "../components/neo/Checkbox";
import { Search, Home, Settings, Bell } from "lucide-react";

export const ComponentsPage = () => {
  const [switchState, setSwitchState] = useState(true);

  return (
    <Layout>
      <div className="space-y-12">
        <header>
          <h1 className="text-4xl font-bold text-[var(--ink-primary)] mb-2">
            Neo-Skeuomorphic System
          </h1>
          <p className="text-[var(--ink-secondary)]">
            A tactile design language based on paper properties.
          </p>
        </header>

        {/* FOUNDATIONS */}
        <section>
          <h2 className="text-xl font-bold text-[var(--ink-primary)] mb-6 uppercase tracking-wider border-b-2 border-[var(--ink-primary)]/10 pb-2 inline-block">
            Foundations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--ink-secondary)]">
                Surface Tokens
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-[var(--paper-base)] rounded-xl flex items-center justify-center text-xs font-mono">
                  Base
                </div>
                <div className="h-24 bg-[var(--paper-raised)] rounded-xl shadow-[var(--shadow-2)] flex items-center justify-center text-xs font-mono">
                  Raised
                </div>
                <div className="h-24 bg-[var(--paper-base)] rounded-xl shadow-[var(--inner-shadow-1)] flex items-center justify-center text-xs font-mono">
                  Inset
                </div>
                <div className="h-24 bg-[var(--teal-primary)] rounded-xl shadow-[var(--shadow-1)] flex items-center justify-center text-xs font-mono text-white">
                  Primary
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--ink-secondary)]">
                Elevation
              </h3>
              <div className="flex flex-col gap-4 items-center justify-center py-4 bg-[var(--paper-base)]/50 rounded-xl">
                <div className="w-20 h-20 bg-[var(--paper-raised)] rounded-lg shadow-[var(--shadow-1)] flex items-center justify-center text-[10px]">
                  Level 1
                </div>
                <div className="w-20 h-20 bg-[var(--paper-raised)] rounded-lg shadow-[var(--shadow-2)] flex items-center justify-center text-[10px] -mt-10 z-10">
                  Level 2
                </div>
                <div className="w-20 h-20 bg-[var(--paper-raised)] rounded-lg shadow-[var(--shadow-3)] flex items-center justify-center text-[10px] -mt-10 z-20">
                  Level 3
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTROLS */}
        <section>
          <h2 className="text-xl font-bold text-[var(--ink-primary)] mb-6 uppercase tracking-wider border-b-2 border-[var(--ink-primary)]/10 pb-2 inline-block">
            Controls
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card title="Buttons">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button
                  variant="primary"
                  disabled
                  className="opacity-50 cursor-not-allowed"
                >
                  Disabled
                </Button>
              </div>
            </Card>

            <Card title="Inputs">
              <div className="space-y-4">
                <Input placeholder="Enter name..." label="Full Name" />
                <div className="relative">
                  <Input placeholder="Search..." className="pl-10" />
                  <Search
                    className="absolute left-3 top-3.5 text-[var(--ink-muted)]"
                    size={18}
                  />
                </div>
                <Input
                  placeholder="Invalid entry"
                  label="Error State"
                  error="This field is required"
                  defaultValue="Invalid..."
                />
              </div>
            </Card>

            <Card title="Toggles">
              <div className="space-y-6">
                <div className="flex gap-8">
                  <Checkbox label="Accept Terms" defaultChecked />
                  <Checkbox label="Option B" />
                </div>
                <div className="flex gap-8 items-center">
                  <Switch
                    checked={switchState}
                    onChange={setSwitchState}
                    label="Notifications"
                  />
                  <Switch checked={false} label="Disabled" />
                </div>

                {/* Volume Slider Mockup */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase text-[var(--ink-muted)]">
                    <span>Volume</span>
                    <span>75%</span>
                  </div>
                  <div className="h-4 bg-[var(--paper-base)] rounded-full shadow-[var(--inner-shadow-1)] relative">
                    <div className="absolute top-0 left-0 h-full w-3/4 bg-[var(--teal-primary)] rounded-full opacity-20"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-6 h-6 bg-[var(--paper-raised)] rounded-full shadow-[var(--shadow-2)] cursor-pointer hover:scale-110 transition-transform"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* DATA DISPLAY */}
        <section>
          <h2 className="text-xl font-bold text-[var(--ink-primary)] mb-6 uppercase tracking-wider border-b-2 border-[var(--ink-primary)]/10 pb-2 inline-block">
            Data Display
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card title="List Items">
              <ul className="divide-y divide-[var(--paper-dim)]">
                {[1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="py-3 flex justify-between items-center hover:bg-[var(--paper-base)]/50 px-2 rounded-lg transition-colors cursor-pointer group"
                  >
                    <div>
                      <div className="font-semibold text-[var(--ink-primary)]">
                        List Item {i}
                      </div>
                      <div className="text-sm text-[var(--ink-muted)]">
                        Secondary text description
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 text-[var(--ink-muted)]">
                      →
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <Badge variant="teal" count={3}>
                  New
                </Badge>
                <Badge variant="dark">Sale</Badge>
                <Badge variant="paper">Normal</Badge>
              </div>

              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-[var(--paper-raised)] shadow-[var(--shadow-2)] border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                      alt="Avatar"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {/* Toast Mock */}
              <div className="bg-[var(--paper-raised)] p-4 rounded-lg shadow-[var(--shadow-3)] border-l-4 border-[var(--teal-primary)] flex justify-between items-start max-w-xs">
                <div>
                  <h4 className="font-bold text-sm">Success</h4>
                  <p className="text-xs text-[var(--ink-secondary)]">
                    Your changes have been saved.
                  </p>
                </div>
                <button className="text-[var(--ink-muted)] hover:text-[var(--ink-primary)]">
                  ×
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
