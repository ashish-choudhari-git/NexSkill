"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Full skills list (same as earlier answer)
const skillOptions = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Ruby", "Rust", "PHP", "Kotlin", "Swift", "SQL", "R", "Dart", "Shell Scripting",
  "HTML", "CSS", "SASS/SCSS", "Tailwind CSS", "Bootstrap", "React.js", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Svelte",
  "Node.js", "Express.js", "Spring Boot", "Django", "Flask", "FastAPI", "Ruby on Rails", "ASP.NET", "NestJS",
  "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase", "Oracle", "Microsoft SQL Server",
  "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Terraform", "AWS", "Azure", "Google Cloud Platform", "Netlify", "Vercel", "Heroku", "Nginx",
  "Git", "GitHub", "GitLab", "Bitbucket",
  "React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Java (Android)",
  "Unit Testing", "Jest", "Mocha", "Cypress", "Selenium", "Playwright", "Postman", "Test Automation",
  "Figma", "Adobe XD", "Sketch", "Adobe Photoshop", "Canva", "Wireframing", "Prototyping",
  "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "LLMs (ChatGPT, Claude, etc.)", "Natural Language Processing", "Data Analysis", "Data Visualization",
  "Ethical Hacking", "OWASP Top 10", "Burp Suite", "Wireshark", "Penetration Testing", "Vulnerability Assessment",
  "Solidity", "Smart Contracts", "Ethereum", "Polygon", "Web3.js", "Hardhat", "Metamask Integration",
  "Agile Methodology", "Scrum", "Kanban", "Project Management", "Communication Skills", "Leadership", "Public Speaking", "Mentoring",
  "API Design", "REST APIs", "GraphQL", "SEO Optimization", "Performance Tuning", "Debugging", "Documentation Writing", "Technical Writing",
];

const availabilityOptions = ["Weekdays", "Weekends", "Evenings", "Mornings"];
const profileOptions = ["Public", "Private"];

export default function UserProfileForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [skillsOffered, setSkillsOffered] = useState([]);
  const [skillsWanted, setSkillsWanted] = useState([]);
  const [availability, setAvailability] = useState("");
  const [profileType, setProfileType] = useState("");
  const [skillInputOffered, setSkillInputOffered] = useState("");
  const [skillInputWanted, setSkillInputWanted] = useState("");

  const addSkill = (skill, type) => {
    if (!skill.trim()) return;
    if (type === "offered" && !skillsOffered.includes(skill)) {
      setSkillsOffered([...skillsOffered, skill]);
      setSkillInputOffered("");
    }
    if (type === "wanted" && !skillsWanted.includes(skill)) {
      setSkillsWanted([...skillsWanted, skill]);
      setSkillInputWanted("");
    }
  };

  const removeSkill = (skill, type) => {
    if (type === "offered") {
      setSkillsOffered(skillsOffered.filter((s) => s !== skill));
    } else {
      setSkillsWanted(skillsWanted.filter((s) => s !== skill));
    }
  };

  return (
    <>
      <Navbar />
      <Card className="w-full max-w-4xl mx-auto p-4 mt-10 mb-5">
        <CardHeader className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl">User Profile</CardTitle>
            <CardDescription>Manage your skill swap profile</CardDescription>
          </div>
          <Avatar>
            <AvatarImage src="/avatar.png" alt="Profile" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </CardHeader>

        <CardContent className="grid gap-6">
          {/* Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              placeholder="Your full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Location */}
          <div className="grid gap-2">
            <Label htmlFor="location">Location (optional)</Label>
            <Input
              id="location"
              value={location}
              placeholder="Your city or region"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Skills Offered */}
          <div className="grid gap-2">
            <Label>Skills Offered</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">+ Add Skill</Button>
              </PopoverTrigger>
              <PopoverContent className="w-[250px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search or add skill..."
                    value={skillInputOffered}
                    onValueChange={setSkillInputOffered}
                  />
                  <CommandList>
                    {skillOptions
                      .filter(
                        (skill) =>
                          skill
                            .toLowerCase()
                            .includes(skillInputOffered.toLowerCase()) &&
                          !skillsOffered.includes(skill)
                      )
                      .map((skill) => (
                        <CommandItem
                          key={skill}
                          onSelect={() => addSkill(skill, "offered")}
                        >
                          {skill}
                        </CommandItem>
                      ))}
                    {skillInputOffered &&
                      !skillOptions.includes(skillInputOffered) &&
                      !skillsOffered.includes(skillInputOffered) && (
                        <CommandItem
                          onSelect={() => addSkill(skillInputOffered, "offered")}
                          className="text-blue-600"
                        >
                          + Add custom skill:{" "}
                          <span className="ml-1 font-medium">
                            {skillInputOffered}
                          </span>
                        </CommandItem>
                      )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <div className="flex flex-wrap gap-2 mt-2">
              {skillsOffered.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill, "offered")}
                    className="ml-1 text-red-500"
                  >
                    ✕
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          {/* Skills Wanted */}
          <div className="grid gap-2">
            <Label>Skills Wanted</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">+ Add Skill</Button>
              </PopoverTrigger>
              <PopoverContent className="w-[250px] p-0">
                <Command>
                  <CommandInput
                    placeholder="Search or add skill..."
                    value={skillInputWanted}
                    onValueChange={setSkillInputWanted}
                  />
                  <CommandList>
                    {skillOptions
                      .filter(
                        (skill) =>
                          skill
                            .toLowerCase()
                            .includes(skillInputWanted.toLowerCase()) &&
                          !skillsWanted.includes(skill)
                      )
                      .map((skill) => (
                        <CommandItem
                          key={skill}
                          onSelect={() => addSkill(skill, "wanted")}
                        >
                          {skill}
                        </CommandItem>
                      ))}
                    {skillInputWanted &&
                      !skillOptions.includes(skillInputWanted) &&
                      !skillsWanted.includes(skillInputWanted) && (
                        <CommandItem
                          onSelect={() => addSkill(skillInputWanted, "wanted")}
                          className="text-blue-600"
                        >
                          + Add custom skill:{" "}
                          <span className="ml-1 font-medium">
                            {skillInputWanted}
                          </span>
                        </CommandItem>
                      )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <div className="flex flex-wrap gap-2 mt-2">
              {skillsWanted.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill, "wanted")}
                    className="ml-1 text-red-500"
                  >
                    ✕
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="grid gap-2">
            <Label htmlFor="availability">Availability</Label>
            <select
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border rounded p-2"
            >
              <option value="">Select availability</option>
              {availabilityOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Profile Visibility */}
          <div className="grid gap-2">
            <Label htmlFor="profile">Profile Visibility</Label>
            <select
              id="profile"
              value={profileType}
              onChange={(e) => setProfileType(e.target.value)}
              className="border rounded p-2"
            >
              <option value="">Select visibility</option>
              {profileOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Save/Discard Buttons */}
          <div className="flex justify-between mt-4">
            <div className="flex gap-4">
              <Button type="submit" variant="default">
                Save
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={() => window.location.reload()}
              >
                Discard
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Footer />
    </>
  );
}
