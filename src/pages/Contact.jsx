import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import Fox from "../models/Fox";
import Ghost from "../models/Ghost";
import Loader from "../components/Loader";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("a");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("metarig|metarigAction");
  const handleBlur = () =>
    setCurrentAnimation("metarig|metarigAction");

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentAnimation("SKM_Crow.ao|ANIM_Crow_IdleMeatPicking");
  };

  return (
    <section
      className="w-100 h-auto  lg:h-screen relative 
            overflow-hidden
            block
            z-10
            before:bg-[url('../../public/images/sky-patternn.png')]
            before:bg-repeat	
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:opacity-75
            before:z-[-5]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700  to-slate-900 
    "
    >
      <section className="relative flex lg:flex-row flex-col max-container">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <form ref={formRef} className="w-full flex flex-col gap-7 mt-1">
            <label className="text-white font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input outline-none"
                placeholder="John"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-white font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input outline-none"
                placeholder="John@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-white font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="textarea outline-none"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onClick={handleClick}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <Ghost />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>{" "}
    </section>
  );
};

export default Contact;
